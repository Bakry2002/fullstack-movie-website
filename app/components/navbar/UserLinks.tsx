'use client'
import { useState, useCallback, useEffect } from 'react'
//? icons
import { AiOutlineMenu } from 'react-icons/ai'
//?components
import MenuItem from './NavLink'
import { useRouter } from 'next/navigation'
import Avatar from '../Avatar'
import Link from 'next/link'
import NavLink from './NavLink'
import { signOut } from 'next-auth/react'

import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai'
import { CiLogout, CiLogin } from 'react-icons/ci'
import { BiListCheck } from 'react-icons/bi'
import { IoCreateOutline } from 'react-icons/io5'

import { handleClickOutsideElementContainer } from '@/app/utils/helper'
import useRegisterModal from '@/app/hooks/useRegisterModal'
import useLoginModal from '@/app/hooks/useLoginModal'
import { SafeUser } from '@/app/types'

interface UserMenuProps {
    currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    //toggle menu
    const toggleMenu = useCallback(() => {
        setIsOpen((value) => !value)
    }, [])

    // close the menu when the user clicks outside the menu
    useEffect(() => {
        handleClickOutsideElementContainer('.userMenu', () => {
            setIsOpen(false)
        })
    }, [setIsOpen])

    return (
        <div className="relative" onClick={toggleMenu}>
            <div
                className={`h-11 cursor-pointer items-center justify-center rounded p-2 transition ${
                    isOpen ? 'bg-secondary' : 'bg-screen-light'
                } flex hover:bg-secondary`}
            >
                <div className="flex h-7 w-10 items-center justify-center rounded-lg text-center text-base">
                    <Avatar src={currentUser?.image} />
                </div>
                {currentUser && (
                    <span className="hidden py-0 text-base font-semibold capitalize text-white md:block">
                        {currentUser?.name}
                    </span>
                )}
            </div>

            {/* User Menu */}
            <ul
                id="userMenu"
                role="list"
                className={`userMenu ${
                    isOpen ? 'visible opacity-100' : 'invisible opacity-0'
                } absolute -left-[85px] top-11 z-50 w-56 overflow-hidden rounded bg-screen-light text-white transition`}
            >
                {!currentUser ? (
                    <>
                        <li role="listitem">
                            <NavLink
                                label="Login"
                                onClick={() => {
                                    loginModal.onOpen()
                                    console.log('Clicked')
                                }}
                                icon={CiLogin}
                            />
                        </li>
                        <li role="listitem">
                            <NavLink
                                label="Create Account"
                                onClick={() => {
                                    registerModal.onOpen()
                                }}
                                icon={IoCreateOutline}
                            />
                        </li>
                    </>
                ) : (
                    <li role="listitem">
                        <NavLink
                            label="Profile"
                            onClick={() => {}}
                            icon={AiOutlineUser}
                        />
                        <NavLink
                            label="Favorites"
                            onClick={() => {}}
                            icon={AiOutlineStar}
                        />
                        <NavLink
                            label="Watchlist"
                            onClick={() => {}}
                            icon={BiListCheck}
                        />
                        <NavLink
                            label="Logout"
                            onClick={() => {
                                signOut()
                            }}
                            icon={CiLogout}
                        />
                    </li>
                )}
            </ul>
        </div>
    )
}

export default UserMenu
