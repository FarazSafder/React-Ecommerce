import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import { Pagination } from 'swiper/modules'

function Instagram({ posts }) {
    return (
        <div className="instagram-container">
            <div>
                <h2 className="my-2 text-[42px] text-center">Find us on Instagram</h2>
                <Swiper className="md:mx-0" slidesPerView={1} breakpoints={
                    {
                        768: {
                            slidesPerView: 4
                        }
                    }
                }>
                    {posts.map((post, index) => (
                        <SwiperSlide key={index}>
                            <div className="h-[400px] md:h-[460px]">

                                <Link to={post.url} className="block h-full">
                                    <div className="bg-center absolute top-0 left-0 w-full h-full p-0 m-0 bg-cover" style={{ backgroundImage: `url(${post.image})` }}></div>
                                </Link>

                            </div>
                        </SwiperSlide>
                    ))

                    }
                </Swiper>
            </div>
        </div >
    )
}

export default Instagram
