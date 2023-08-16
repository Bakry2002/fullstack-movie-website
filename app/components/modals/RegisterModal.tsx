'use client'
import { useState, useCallback } from 'react'
import useLoginModal from '@/app/hooks/useLoginModal'
import useRegisterModal from '@/app/hooks/useRegisterModal'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'
import Input from '../inputs/Input'
import Heading from '../Heading'
import Button from '../Button'
import { FcGoogle } from 'react-icons/fc'
import { VscGithubInverted, VscTwitter } from 'react-icons/vsc'

import { signIn } from 'next-auth/react'
import Modal from './Modal'
import axios from 'axios'
import toast from 'react-hot-toast'
const RegisterModal = () => {
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()
    const [isLoading, setIsLoading] = useState(false)

    // form controller
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    })

    // submit handler
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        axios
            .post('api/register', data)
            .then(() => {
                toast.success('Registered successfully!')
                registerModal.onClose()
                loginModal.onOpen()
            })
            .catch((err) => {
                toast.error('Something went wrong, register again!')
                console.log(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    //toggle between login and register modals
    const toggleModals = useCallback(() => {
        registerModal.onClose()
        loginModal.onOpen()
    }, [registerModal, loginModal])

    const bodyContent: any = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Welcome to Movie it!"
                subtitle="Create an account!"
            />
            <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                required
                errors={errors}
                validation={{ pattern: /^[A-Za-z\s]*$/ }} // only letters
            />

            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                required
                errors={errors}
                validation={{
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                }} // email
            />

            <Input
                id="password"
                label="Password"
                disabled={isLoading}
                register={register}
                required
                errors={errors}
                validation={{
                    minLength: 6,
                }} // min length 6
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
            />
            {/* <Button
                outline
                label="Continue with Github"
                icon={VscGithubInverted}
                onClick={() => signIn('github')}
            /> */}
            <Button
                outline
                label="Continue with Twitter"
                icon={VscTwitter}
                onClick={() => signIn('twitter')}
            />
            {/* Already have account section */}
            <div className="mt-4 font-light text-neutral-500">
                <div className="flex flex-row items-center justify-center gap-2 text-center">
                    <div>Already have an account?</div>
                    <div
                        onClick={toggleModals}
                        className="cursor-pointer text-neutral-800 hover:underline"
                    >
                        Log in
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <Modal
            title="Register"
            actionLabel="Register"
            isOpen={registerModal.isOpen}
            onClose={registerModal.onClose}
            body={bodyContent}
            footer={footerContent}
            onSubmit={handleSubmit(onSubmit)}
        />
    )
}

export default RegisterModal
