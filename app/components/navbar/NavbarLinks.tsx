'use client'

import useSearchModal from '@/app/hooks/useSearchModal'
import MenuItem from './NavLink'
import Search from './Search'

interface NavbarMenuProps {}

const NavbarMenu: React.FC<NavbarMenuProps> = ({}) => {
    const searchModal = useSearchModal()
    return (
        <div className="relative">
            <div className="hidden items-center md:flex">
                <MenuItem label="Home" onClick={() => {}} isNavbarMenu />
                <MenuItem label="Movies" onClick={() => {}} isNavbarMenu />
                <MenuItem label="TV Shows" onClick={() => {}} isNavbarMenu />
                <MenuItem label="People" onClick={() => {}} isNavbarMenu />
            </div>
        </div>
    )
}

export default NavbarMenu
