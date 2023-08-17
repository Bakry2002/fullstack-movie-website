'use client'

import useSearchModal from '@/app/hooks/useSearchModal'
import Modal from '../Modal'
import { useCallback, useState } from 'react'
import SearchFilterBox from './SearchFilterBox'
import Link from 'next/link'
interface SearchModalProps {}
import { BiSearch, BiSolidCameraMovie } from 'react-icons/bi'
import { PiTelevisionBold } from 'react-icons/pi'
import { BsPeopleFill } from 'react-icons/bs'
import { PiDotsThreeOutlineFill } from 'react-icons/pi'
const SearchModal: React.FC<SearchModalProps> = ({}) => {
    const [isLoading, setIsLoading] = useState(false) // loading state
    const searchModal = useSearchModal() // use the store
    const [activeFilter, setActiveFilter] = useState('All') // active state

    const toggleActive = useCallback((filter: any) => {
        setActiveFilter(filter)
    }, [])

    // submit function
    const onSubmit = () => {}

    const leftSideContent: any = (
        //Left side: search filter
        <ul
            role="list"
            className="sticky top-0 z-50 float-left h-full w-[170px] overflow-hidden bg-screen-light text-xl shadow-md"
        >
            <SearchFilterBox
                title="All"
                icon={BiSearch}
                onclick={() => toggleActive('All')}
                isActive={activeFilter === 'All'}
                onSubmit={() => {}}
            />
            <SearchFilterBox
                title="Movies"
                icon={BiSolidCameraMovie}
                onclick={() => toggleActive('Movies')}
                isActive={activeFilter === 'Movies'}
                onSubmit={() => {}}
            />
            <SearchFilterBox
                title="TV Shows"
                icon={PiTelevisionBold}
                onclick={() => toggleActive('TV Shows')}
                isActive={activeFilter === 'TV Shows'}
                onSubmit={() => {}}
            />
            <SearchFilterBox
                title="People"
                icon={BsPeopleFill}
                onclick={() => toggleActive('People')}
                isActive={activeFilter === 'People'}
                onSubmit={() => {}}
            />
        </ul>
    )

    const rightSideContent: any = (
        //Right side: search result
        <div className="float-right h-full w-[calc(100%_-_170px)]">
            {/* Search input */}
            <div className="block w-full">
                <form action="" className="flex">
                    <input
                        type="text"
                        placeholder="Search for a movie, tv show, person..."
                        className="w-full rounded-none border-none bg-white px-5 text-base font-bold leading-[50px] text-black/70 outline-none"
                    />
                </form>
            </div>
            {/* Title bar */}
            <div className="sticky top-0 z-10 h-14 bg-white/5 p-4 text-xl">
                <h3 className="float-left text-xl font-bold text-neutral-600">
                    Search Results for:{' '}
                    <em className="font-normal text-white">Batman</em>
                </h3>
                <Link
                    href="/search"
                    className="float-right rounded-md bg-secondary px-2 text-base text-white/70 transition duration-300 hover:text-white"
                >
                    See More
                </Link>
            </div>
        </div>
    )
    return (
        <Modal
            isOpen={searchModal.isOpen}
            onClose={searchModal.onClose}
            onSubmit={onSubmit}
            leftSide={leftSideContent}
            rightSide={rightSideContent}
            actionLabel="Search"
            title="Search"
            disabled={isLoading}
        />
    )
}

export default SearchModal
