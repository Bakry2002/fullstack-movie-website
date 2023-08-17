'use client'

import useSearchModal from '@/app/hooks/useSearchModal'
import MenuItem from './NavLink'
import { useRouter } from 'next/navigation'

interface NavbarMenuProps {}

const NavbarMenu: React.FC<NavbarMenuProps> = ({}) => {
    const router = useRouter()
    return (
        <div className="relative">
            <div className="hidden items-center md:flex">
                <MenuItem
                    label="Home"
                    onClick={() => {
                        router.push('/')
                    }}
                    isNavbarMenu
                />
                <MenuItem label="Movies" onClick={() => {}} isNavbarMenu />
                <MenuItem label="TV Shows" onClick={() => {}} isNavbarMenu />
                <MenuItem label="People" onClick={() => {}} isNavbarMenu />
            </div>
        </div>
    )
}

export default NavbarMenu
