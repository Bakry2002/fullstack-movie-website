'use client'

import Image, { StaticImageData } from 'next/image'

interface HeadingProps {
    title: string
    subtitle?: string
    center?: boolean
    image?: StaticImageData
}

const Heading: React.FC<HeadingProps> = ({
    title,
    subtitle,
    center,
    image,
}) => {
    return (
        <div className={center ? 'text-center' : 'text-start'}>
            {image && (
                <Image
                    src={image}
                    alt={title}
                    width={64}
                    height={64}
                    className="mx-auto mb-3"
                />
            )}
            <div className="text-2xl font-bold">{title}</div>
            <div className="mt-2 font-light text-neutral-500">{subtitle}</div>
        </div>
    )
}

export default Heading
