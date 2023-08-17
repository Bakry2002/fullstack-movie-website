import { getPlaiceholder } from 'plaiceholder'
import Image from 'next/image'
import React from 'react'

const getImage = async (src: string) => {
    const buffer = await fetch(src).then(async (res) =>
        Buffer.from(await res.arrayBuffer())
    )
    const { ...plaiceholder } = await getPlaiceholder(buffer, { size: 10 })

    return {
        ...plaiceholder,
        img: {
            src,
        },
    }
}

interface OptimizedImageProps {
    src: string
    width: number
    height: number
    alt: string
    className?: string
}

const OptimizedImage: React.FC<OptimizedImageProps> = async ({
    src,
    width,
    height,
    alt,
    className,
}) => {
    const { base64, img } = await getImage(src) // this is the line that is causing the error
    return (
        <Image
            {...img}
            alt={alt}
            blurDataURL={base64}
            placeholder="blur"
            width={width}
            height={height}
            className={className ? className : ''}
        />
    )
}

export default OptimizedImage
