'use client'

import { Icon } from 'next/dist/lib/metadata/types/metadata-types'
import { IconType } from 'react-icons'
interface MenuItemProps {
    onClick: () => void // function to be called when the menu item is clicked
    label: string // label of the menu item
    className?: string // optional class name
    isNavbarMenu?: boolean // optional boolean to check if the menu item is in the navbar menu
    icon?: IconType
}

const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label,
    isNavbarMenu,
    className,
    icon: Icon,
}) => {
    return (
        <div
            onClick={onClick}
            className={`${
                isNavbarMenu
                    ? 'mx-4 my-0 text-white hover:text-secondary'
                    : 'px-4 py-3 hover:bg-neutral-200 hover:text-secondary'
            } ${
                Icon ? 'flex items-center gap-2' : ''
            } cursor-pointer  font-semibold transition ${
                className ? className : ''
            }`}
        >
            {Icon && (
                <Icon size={20} className="fill-secondary text-secondary" />
            )}
            {label}
        </div>
    )
}

export default MenuItem
