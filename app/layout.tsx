import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClientOnly from './components/ClientOnly'
import Navbar from './components/navbar/Navbar'
import Genres from './components/navbar/genres/Genres'
import ToastProvider from './providers/ToastProvider'
import RegisterModal from './components/modals/RegisterModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Movie it! | Explore the world of movies',
    description:
        'Search and explore the world of movies & TV shows with no limits',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-screen`}>
                <ClientOnly>
                    <RegisterModal />
                    <ToastProvider />
                    <Navbar />
                    <Genres />
                </ClientOnly>
                {children}
            </body>
        </html>
    )
}
