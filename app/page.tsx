export const dynamic = 'force-dynamic'

import ClientOnly from './components/ClientOnly'
import Container from './components/Container'
import OptimizedImage from './components/OptimizedImage'
import Carousel from './components/carousel/Carousel'

export default function Home() {
    return (
        <ClientOnly>
            <div className="h-[2000px]">
                <div className="relative flex h-[450px] w-full items-center bg-screen md:h-[700px]">
                    {/* Backdrop image */}
                    <div className="absolute left-0 top-0 h-full w-full overflow-hidden opacity-50">
                        <OptimizedImage
                            src="https://image.tmdb.org/t/p/original/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg"
                            alt="backdrop"
                            width={1920}
                            height={900}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    {/* Opacity layer  */}
                    <div className="bg-opacity-layer absolute bottom-0 left-0 h-40 w-full"></div>
                    {/* Content */}
                    <Container className="flex items-center justify-center">
                        <div className="relative mx-auto mt-20 flex max-w-[800px] flex-col items-center text-center text-white md:my-0">
                            <span className="mb-[10px] text-5xl font-bold md:mb-0 md:text-8xl">
                                Welcome
                            </span>
                            <span className="mb-10 text-lg font-semibold md:text-xl">
                                Millions of movies, TV shows, and people to
                                discover. Explore now!
                            </span>
                            {/* Search input */}
                            <div className="hidden w-full items-center md:flex">
                                <input
                                    type="text"
                                    placeholder="Search for a movie, tv show, person..."
                                    className="h-[50px] w-[calc(100%_-_100px)] rounded-none rounded-bl-[30px] rounded-tl-[30px] border-none bg-white
                                    px-4 py-0 text-sm text-black outline-none md:h-[60px] md:w-[calc(100%_-_150px)] md:px-8 md:py-0 md:text-xl
                                "
                                />
                                <button
                                    type="button"
                                    className="bg-button-gradient h-[50px] w-[100px] rounded-br-[30px] rounded-tr-[30px] border-0 text-white outline-0 md:h-[60px] md:w-[150px] md:text-lg"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </Container>
                </div>
                {/* Trending Carousel section */}
                <Carousel />
            </div>
        </ClientOnly>
    )
}
