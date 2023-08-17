// import prisma from '@/app/libs/prismadb'
// import { getServerSession } from 'next-auth/next'
// import { authOptions } from '@/pages/api/auth/[...nextauth]'

// export const getSession = async () => {
//     // get the session from the server
//     return await getServerSession(authOptions)
// }

// export default async function getCurrentUser() {
//     try {
//         // get user session
//         const session = await getSession()

//         // check if the session is not valid
//         if (!session?.user?.email) return null

//         // if the session is valid, get the user from the database
//         const currentUser = await prisma.user.findUnique({
//             where: {
//                 email: session.user.email as string,
//             },
//         })

//         // if there is no user with such email
//         if (!currentUser) return null

//         // if everything is ok, return the user and fix the date format
//         return {
//             ...currentUser,
//             createdAt: currentUser.createdAt.toISOString(),
//             updatedAt: currentUser.updatedAt.toISOString(),
//         }
//     } catch (error: any) {
//         return null
//     }
// }

import prisma from '@/app/libs/prismadb'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export const getSession = async () => {
    return await getServerSession(authOptions)
}

export default async function getCurrentUser() {
    try {
        const session = await getSession()

        if (!session?.user?.email) return null

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string,
            },
        })

        // user not found or if there is no current user logged in
        if (!currentUser) return null

        // if everything is ok, return the user
        return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(), // convert to ISO string to avoid JSON.stringify() error and hydration errors in the client
            updatedAt: currentUser.updatedAt.toISOString(),
            emailVerified: currentUser.emailVerified?.toISOString(),
        }
    } catch (error: any) {
        return null
    }
}
