'use client'

import { CiLight, CiDark } from 'react-icons/ci'
import UserLinks from './UserLinks'

import { SafeUser } from '@/app/types'
import useSearchModal from '@/app/hooks/useSearchModal'
import { BiSearch } from 'react-icons/bi'
import { useCallback } from 'react'
interface ActionLinksProps {
    currentUser?: SafeUser | null
}

const ActionLinks: React.FC<ActionLinksProps> = ({ currentUser }) => {
    const searchModal = useSearchModal()

    const toggleModal = useCallback(() => {
        searchModal.isOpen ? searchModal.onClose() : searchModal.onOpen()
    }, [searchModal])

    return (
        <div className="flex items-center justify-center gap-2">
            {/* Search button */}
            <div
                onClick={toggleModal}
                className="flex items-center justify-center"
            >
                <div className="z-10 mx-0 my-2 cursor-pointer rounded bg-screen-light px-2 py-0 transition hover:bg-secondary">
                    <BiSearch
                        size={20}
                        className="clear-both -mx-2 my-0 h-11 w-11 overflow-hidden fill-white stroke-white p-2 transition"
                    />
                </div>
            </div>

            {/* User Links */}
            <UserLinks currentUser={currentUser} />

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
