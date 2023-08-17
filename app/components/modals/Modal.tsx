'use client'

interface ModalProps {}
import useSearchModal from '@/app/hooks/useSearchModal'
import { handleClickOutsideElementContainer } from '@/app/utils/helper'
import { useCallback, useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { MdOutlineClose } from 'react-icons/md'
import Button from '../Button'
import { BiSearch, BiSolidCameraMovie } from 'react-icons/bi'
import { BsPeopleFill } from 'react-icons/bs'
import { PiTelevisionBold, PiDotsThreeOutlineFill } from 'react-icons/pi'
import Link from 'next/link'

interface ModalProps {
    isOpen: boolean
    disabled?: boolean // disable the button
    onClose: () => void // function that closes the modal
    onSubmit: () => void // function that submits the modal
    actionLabel: String
    title: String
    body?: String
    footer?: String
    rightSide?: String
    leftSide?: String
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    disabled,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    leftSide,
    rightSide,
    actionLabel,
}) => {
    const searchModal = useSearchModal()
    const [showModal, setShowModal] = useState(isOpen)

    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen])

    // close the modal when the user clicks on the overlay
    const handleClose = useCallback(() => {
        if (disabled) return // if its already disabled, do not close the modal

        setShowModal(false)
        setTimeout(() => {
            onClose() // close the modal after 300ms, why? because of the animation
        }, 300)
    }, [disabled, onClose])

    // submit the modal when the user clicks on the action button
    const handleSubmit = useCallback(() => {
        if (disabled) return // if its already disabled, do not submit the modal

        onSubmit()
    }, [disabled, onSubmit])

    if (!isOpen) return null // if the modal is not open, do not render anything

    return (
        <>
            {searchModal.isOpen && (
                <div
                    id="modal"
                    className={`fixed inset-0 top-[64px] z-50 mt-4 h-[calc(100vh_-_64px)] w-full overflow-y-auto overflow-x-hidden bg-black transition duration-300 focus:outline-none ${
                        showModal ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    {/* Left side: search filter */}
                    {leftSide}

                    {/* Right side: search area */}
                    {rightSide}
                </div>
            )}

            {!searchModal.isOpen && (
                <div
                    className="
                    fixed
                    inset-0
                    z-50
                    flex
                    justify-center
                    overflow-hidden
                    overflow-y-auto
                    overflow-x-hidden
                    bg-neutral-800/70
                    focus:outline-none
                "
                >
                    <div
                        className="
                        relative
                        mx-auto
                        mt-6
                        w-full
                        md:h-auto
                        md:w-4/6
                        lg:h-auto
                        lg:w-3/6
                        xl:w-2/5
                    "
                    >
                        {/* Content */}
                        <div
                            className={`
                            translate
                            h-full
                            duration-300
                            ${showModal ? 'translate-y-0' : 'translate-y-full'}
                            ${showModal ? 'opacity-100' : 'opacity-0'}
                            `}
                        >
                            <div
                                className="
                                translate
                                relative
                                flex
                                h-auto
                                w-full
                                flex-col
                                rounded-lg
                                border-0
                                bg-white
                                shadow-lg
                                outline-none
                                focus:outline-none
                                lg:h-auto
                            "
                            >
                                {/* Header */}
                                <div className="relative flex items-center justify-center rounded-t border-b p-6">
                                    <button
                                        onClick={handleClose}
                                        className="absolute left-9 border-0 p-1 transition hover:opacity-70"
                                    >
                                        <IoMdClose size={18} />
                                    </button>
                                    <div className="text-lg font-bold">
                                        {title}
                                    </div>
                                </div>
                                {/* Body */}
                                <div className="relative flex-auto p-6">
                                    {body}
                                </div>
                                {/* Footer */}
                                <div className="flex flex-col gap-2 p-6">
                                    <div className="flex w-full flex-row items-center gap-4">
                                        <Button
                                            label={actionLabel}
                                            onClick={handleSubmit}
                                            disabled={disabled}
                                        />
                                    </div>
                                    {footer}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal
