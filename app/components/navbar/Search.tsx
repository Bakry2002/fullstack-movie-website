'use client'

interface SearchProps {}

import { BiSearch } from 'react-icons/bi'

import useSearchModal from '@/app/hooks/useSearchModal'
import Modal from '../modals/Modal'
import { useCallback } from 'react'

const Search: React.FC<SearchProps> = ({}) => {
    const searchModal = useSearchModal() // use the store

    // submit function
    const onSubmit = () => {}
    return (
        <>
            <div
                onClick={searchModal.onOpen}
                className="flex items-center justify-center"
            >
                <div className="bg-screen-light z-10 mx-0 my-2 cursor-pointer rounded px-2 py-0 transition hover:bg-secondary">
                    <BiSearch
                        size={20}
                        className="clear-both -mx-2 my-0 h-11 w-11 overflow-hidden fill-white stroke-white p-2 transition"
                    />
                </div>
            </div>
            <Modal
                isOpen={searchModal.isOpen}
                onClose={searchModal.onClose}
                onSubmit={onSubmit}
            />
        </>
    )
}

export default Search
