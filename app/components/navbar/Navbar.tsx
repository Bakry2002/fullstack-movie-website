'use client'

import Container from '../Container'
import Logo from './Logo'
import MenuItem from './NavLink'
import NavbarLinks from './NavbarLinks'

import ActionLinks from './ActionLinks'
import { useState, useCallback, useEffect } from 'react'

import { CgMenu } from 'react-icons/cg'
import { SafeUser } from '@/app/types'
import Genres from './genres/Genres'

interface NavbarProps {
    currentUser?: SafeUser | null
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [showNavbar, setShowNavbar] = useState('top')
    const [lastScrollY, setLastScrollY] = useState(0)

    // toggle menu
    const toggleMenu = useCallback(() => {
        setIsMenuOpen((value) => !value)
    }, [])

    // navbar style options
    const controlNavbarStyle = useCallback(() => {
        const scrollY = window.scrollY
        if (scrollY > 200) {
            if (scrollY > lastScrollY && !isMenuOpen) {
                setShowNavbar('hide')
            } else {
                setShowNavbar('show')
            }
        } else {
            setShowNavbar('top')
        }
        setLastScrollY(scrollY)
    }, [isMenuOpen, lastScrollY])

    // add scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', controlNavbarStyle)
        return () => window.removeEventListener('scroll', controlNavbarStyle)
    }, [lastScrollY, controlNavbarStyle])

    return (
        <div
            className={`fixed z-20 flex w-full flex-col items-center transition-all duration-300
                ${
                    showNavbar === 'top'
                        ? 'bg-black/25 backdrop-blur-[3.5px]'
                        : showNavbar === 'hide'
                        ? '-translate-y-[140px]'
                        : 'bg-[#020c1b]'
                }
            `}
        >
            <div className="z-10 w-full shadow-sm">
                <div className={`${!isMenuOpen ? 'border-b' : ''} py-2`}>
                    <Container>
                        <div className="flex items-center justify-between gap-3 md:gap-0">
                            {/* Logo */}
                            <Logo />
                            {/* Navbar items */}
                            <NavbarLinks />
                            {/* user items */}
                            <ActionLinks currentUser={currentUser} />

                            {/* Mobile menu */}
                            <div
                                onClick={toggleMenu}
                                className="flex items-center md:hidden"
                            >
                                <CgMenu
                                    size={30}
                                    className="cursor-pointer text-white"
                                />
                            </div>
                        </div>
                    </Container>

                    {/* mobile menu */}
                    {isMenuOpen && (
                        <div className="flex flex-col items-center justify-center bg-screen-light p-3">
                            <MenuItem
                                onClick={() => {}}
                                label="Home"
                                className="hover:bg-screen-light"
                            />
                            <MenuItem
                                onClick={() => {}}
                                label="Movies"
                                className="hover:bg-screen-light"
                            />
                            <MenuItem
                                onClick={() => {}}
                                label="TV Shows"
                                className="hover:bg-screen-light"
                            />
                            <MenuItem
                                onClick={() => {}}
                                label="People"
                                className="hover:bg-screen-light"
                            />
                        </div>
                    )}
                </div>
            </div>
            {showNavbar === 'top' && <Genres />}
        </div>
    )
}

export default Navbar
