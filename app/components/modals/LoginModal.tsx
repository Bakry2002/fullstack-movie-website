'use client'

import useLoginModal from '@/app/hooks/useLoginModal'
import useRegisterModal from '@/app/hooks/useRegisterModal'

import { useState, useCallback } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'
import { VscGithubInverted, VscTwitter } from 'react-icons/vsc'
//? next-auth
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import Heading from '../Heading'
import Input from '../inputs/Input'
//? assets
import logo from '@/public/assets/movix-logo.png'
import Button from '../Button'
import Modal from './Modal'
const LoginModal = () => {
    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()

    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()

    // form controller
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: '',
        },
    })

    // submit handler
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        signIn('credentials', {
            ...data,
            redirect: false,
        }).then((callback) => {
            setIsLoading(false)

            if (callback?.ok) {
                toast.success('Logged in successfully!')
                reset()
                router.refresh()
                loginModal.onClose()
            }

            if (callback?.error) {
                toast.error(callback.error)
            }
        })
    }

    // toggle between login and register modals
    const toggleModals = useCallback(() => {
        loginModal.onClose() // close the login modal
        registerModal.onOpen() // open the register modal
    }, [loginModal, registerModal])

    //body content
    const bodyContent: any = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Welcome back!"
                subtitle="Login to your account!"
                center
                image={logo}
            />

            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                required
                errors={errors}
            />
            <Input
                id="password"
                label="Password"
                type="password"
                disabled={isLoading}
                register={register}
                required
                errors={errors}
            />
        </div>
    )

    const footerContent: any = (
        <div className="mt-3 flex flex-col gap-4">
            <span className='relative text-neutral-700 before:absolute before:-top-3 before:left-1/2 before:z-10 before:flex before:w-10 before:-translate-x-1/2 before:items-center before:justify-center before:bg-white before:content-["or"]'>
                <hr />
            </span>

            <Button
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={() => signIn('google')}
                disabled={isLoading}
            />
            <Button
                outline
                label="Continue with Twitter"
                icon={VscTwitter}
                disabled={isLoading}
                onClick={() => signIn('twitter')}
            />
            {/* <Button
                outline
                label="Continue with Github"
                icon={VscGithubInverted}
                disabled={isLoading}
                onClick={() => signIn('github')}
            /> */}

            {/* Don't have account section */}
            <div className="mt-4 font-light text-neutral-500">
                <div className="flex flex-row items-center justify-center gap-2 text-center">
                    <div>First time here?</div>
                    <div
                        onClick={toggleModals}
                        className="cursor-pointer text-neutral-800 hover:underline"
                    >
                        Create an account
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <Modal
            disabled={isLoading}
            title="Login"
            actionLabel="Login"
            isOpen={loginModal.isOpen}
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default LoginModal
