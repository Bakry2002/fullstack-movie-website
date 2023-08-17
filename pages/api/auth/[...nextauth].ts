import { PrismaAdapter } from '@next-auth/prisma-adapter'
import nextAuth, { AuthOptions } from 'next-auth'

//?providers
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import TwitterProvider from 'next-auth/providers/twitter'
import CredentialsProvider from 'next-auth/providers/credentials'
//? prisma client instance to be used in api routes
import prisma from '@/app/libs/prismadb'
//? bcrypt for hashing password
import bcrypt from 'bcrypt'

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID as string,
            clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' },
            },
            authorize: async (credentials) => {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Please enter your email and password')
                }

                // find user by email
                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                })

                if (!user || !user?.hashedPassword) {
                    throw new Error('No user found')
                }

                // check if password that entered by user is correct and match with the hashed password
                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                )

                if (!isCorrectPassword) {
                    throw new Error('Incorrect password')
                }

                // if everything is correct, return user object
                return user
            },
        }),
    ],
    pages: {
        signIn: '/', // redirect to home page if user is not logged in
    },
    debug: process.env.NODE_ENV === 'development', // only show debug logs in development
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
}

export default nextAuth(authOptions)
