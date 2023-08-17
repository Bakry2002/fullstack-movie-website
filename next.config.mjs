import withPlaiceholder from '@plaiceholder/next'

/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     serverActions: true,
    // },
    images: {
        domains: [
            'lh3.googleusercontent.com',
            'images.unsplash.com',
            'www.themoviedb.org',
            'image.tmdb.org',
        ],
    },
}

export default withPlaiceholder(nextConfig)
