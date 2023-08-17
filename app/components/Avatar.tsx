'use client'

import Image from 'next/image'
interface AvatarProps {
    src?: string | null | undefined | any
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
    return (
        <Image
            src={src || '/assets/placeholder.jpg'}
            alt="user avatar"
            width={30}
            height={30}
            className="rounded-full"
        />
    )
}

export default Avatar
