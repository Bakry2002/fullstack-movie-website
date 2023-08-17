'use client'
import { create } from 'zustand'

interface RegisterModalProps {
    isOpen: boolean
    onOpen: () => void // function that opens the modal
    onClose: () => void // function that closes the modal
}

const useRegisterModal = create<RegisterModalProps>((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true })),
    onClose: () => set(() => ({ isOpen: false })),
}))

export default useRegisterModal
