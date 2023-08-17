'use client'

import { CiLight, CiDark } from 'react-icons/ci'
import UserLinks from './UserLinks'
import Search from './Search'
interface ActionLinksProps {}

const ActionLinks: React.FC<ActionLinksProps> = ({}) => {
    return (
        <div className="flex items-center justify-center gap-2">
            {/* Search button */}
            <Search />

            {/* User Links */}
            <UserLinks />

            {/* Mode Button */}
            <div className="z-10 mx-0 my-2 cursor-pointer rounded bg-screen-light px-2 py-0 transition hover:bg-secondary">
                <CiLight
                    size={20}
                    className="clear-both -mx-2 my-0 hidden h-11 w-11 overflow-hidden fill-white stroke-white p-2 transition"
                />
                <CiDark
                    size={20}
                    className="clear-both -mx-2 my-0 block h-11 w-11 overflow-hidden fill-white stroke-white p-2 transition"
                />
            </div>
        </div>
    )
}

export default ActionLinks
