'use client'
import { IconType } from 'react-icons'

interface GenreBoxProps {
    icon: IconType
    label: string
    selected?: boolean
}

const GenreBox: React.FC<GenreBoxProps> = ({ icon: Icon, label, selected }) => {
    return (
        <div
            className={`flex cursor-pointer flex-row items-center gap-2 border-b-2 p-3 text-white transition ${
                selected
                    ? 'border-b-neutral-800 text-black'
                    : 'border-transparent text-black/60 hover:border-b-secondary hover:text-secondary'
            }`}
        >
            <Icon size={20} />
            <div className="text-sm font-medium">{label}</div>
        </div>
    )
}

export default GenreBox
