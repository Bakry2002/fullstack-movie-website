import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClientOnly from './components/ClientOnly'
import Navbar from './components/navbar/Navbar'
import ToastProvider from './providers/ToastProvider'
import RegisterModal from './components/modals/RegisterModal'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import SearchModal from './components/modals/searchModal/SearchModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Movie it! | Explore the world of movies',
    description:
        'Search and explore the world of movies & TV shows with no limits',
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const currentUser = await getCurrentUser()
    return (
        <html lang="en">
            <body className={`${inter.className} bg-screen`}>
                <ClientOnly>
                    <RegisterModal />
                    <LoginModal />
                    <SearchModal />
                    <ToastProvider />
                    <Navbar currentUser={currentUser} />
                </ClientOnly>
                {children}
            </body>
        </html>
    )
}
