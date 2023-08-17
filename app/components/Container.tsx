'use client'

interface ContainerProps {
    children: React.ReactNode
    className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return (
        <div
            className={`mx-auto h-full max-w-[2520px] px-4 sm:px-2 md:px-6 xl:px-10 ${
                className ? className : ''
            }`}
        >
            {children}
        </div>
    )
}

export default Container
