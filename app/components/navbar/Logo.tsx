'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
    const router = useRouter()
    return (
        <Image
            src="/assets/Logo.svg"
            alt="Logo"
            width={200}
            height={200}
            onClick={() => router.push('/')}
            className="block cursor-pointer"
        />
    )
}

export default Logo
