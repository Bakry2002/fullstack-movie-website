'use client'

import Container from '../Container'
import Logo from './Logo'
import MenuItem from './NavLink'
import NavbarLinks from './NavbarLinks'
import Search from './Search'
import UserLinks from './UserLinks'
import ActionLinks from './ActionLinks'
import { useState, useCallback } from 'react'
import Genres from './genres/Genres'

import { CgMenu } from 'react-icons/cg'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // toggle menu
    const toggleMenu = useCallback(() => {
        setIsMenuOpen((value) => !value)
    }, [])
    return (
        <div className="fixed z-10 w-full shadow-sm">
            <div className={`${!isMenuOpen ? 'border-b' : ''} py-2`}>
                <Container>
                    <div className="flex items-center justify-between gap-3 md:gap-0">
                        {/* Logo */}
                        <Logo />
                        {/* Navbar items */}
                        <NavbarLinks />
                        {/* user items */}
                        <ActionLinks />

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
    )
}

export default Navbar
