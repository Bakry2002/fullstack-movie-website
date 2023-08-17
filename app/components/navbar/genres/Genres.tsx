'use client'
import { useSearchParams } from 'next/navigation'
import Container from '../../Container'
import axios from 'axios'
import { BiSolidCameraMovie } from 'react-icons/bi'
import GenreBox from '../genres/GenreBox'

import { useState, useEffect } from 'react'
const getGenres = async () => {
    const data = fetch(
        'https://api.themoviedb.org/3/genre/movie/list?language=en',
        {
            cache: 'no-store',
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
            },
        }
    )
        .then((response) => response.json())
        .then((data) => data.genres)
        .catch((err) => console.error(err))

    return data
}

const Genres = () => {
    const [genres, setGenres] = useState([])

    useEffect(() => {
        getGenres().then((data) => setGenres(data))
    }, [])
    return (
        <div className="pt-20 shadow-sm">
            <Container>
                <div className="flex flex-row items-center justify-between overflow-x-auto py-2 md:pt-4">
                    {genres &&
                        genres.length > 0 &&
                        genres.map(
                            (genre: any, index: number) =>
                                index < 12 && (
                                    <GenreBox
                                        key={genre.id}
                                        label={genre.name}
                                        icon={BiSolidCameraMovie}
                                    />
                                )
                        )}
                </div>
            </Container>
        </div>
    )
}

export default Genres
