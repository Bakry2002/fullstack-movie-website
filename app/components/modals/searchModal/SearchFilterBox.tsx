'use client'

import { IconType } from 'react-icons'

interface SearchFilterBoxProps {
    title: String
    icon: IconType
    onclick?: () => void
    onSubmit?: () => void
    isActive?: boolean
}

const SearchFilterBox: React.FC<SearchFilterBoxProps> = ({
    title,
    icon: Icon,
    onclick,
    onSubmit,
    isActive,
}) => {
    return (
        <li
            onClick={onclick}
            role="listitem"
            className={`relative block h-[calc(100%_/_4)] w-full cursor-pointer overflow-hidden text-base font-bold text-white transition-all
                after:absolute after:left-1/2 after:top-1/2 after:z-10 after:h-[5px] after:w-[5px] after:-translate-x-1/2 after:-translate-y-1/2 after:scale-0 after:rounded-full after:bg-[#ffffff45] after:transition-all after:duration-0 after:content-['']
                hover:after:-translate-x-1/2 hover:after:-translate-y-1/2 hover:after:scale-[99] hover:after:transition hover:after:duration-700
                ${isActive ? 'bg-[#ffffff1c] text-white shadow-sm' : ''}
            `}
        >
            <span className="absolute left-1/2 top-1/2 flex w-[120px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
                <Icon
                    size={40}
                    className="mx-auto my-0 block text-center text-white"
                />
                <em className="text-center text-xl font-normal text-white">
                    {title}
                </em>
            </span>
        </li>
    )
}

export default SearchFilterBox
