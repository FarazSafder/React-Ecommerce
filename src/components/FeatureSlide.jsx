import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import { Navigation } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"

function FeatureSlide({ ...product }) {
    const nextref = useRef(null)
    const prevref = useRef(null)
    return (
        <div className="relative">
            <div>
                <div className="mb-5 mt-5">
                    <div className="relative overflow-hidden mx-auto my-0 group">
                        <Link to={`/product/${product.slug}`} className="block relative">
                            <div className="relative"> {/* Image wrapper */}
                                <div>
                                    <Swiper allowTouchMove={false} slidesPerView={1} navigation={{ nextEl: nextref.current, prevEl: prevref.current }} loop modules={[Navigation]}>
                                        {product.images.map((image, index) => (
                                            <SwiperSlide key={index} className={`${(index == 1 ? 'product-block__image--primary' : 'product-block__image--secondary')}`}>
                                                <div className="mx-auto">
                                                    <div className="pt-[149%] relative">
                                                        <img src={image} alt={product.title}  className="object-cover h-full w-full absolute top-0 left-0 hover:scale-[1.2] transition-transform duration-300 ease-[cubic-bezier(0.25,0.01,0.25,1)]" />
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}

                                    </Swiper>
                                </div>
                            </div>
                        </Link>
                        {/* Navigation Arrows */}
                        <button ref={prevref} className={`hidden z-[1] md:block border-0 absolute top-1/2 left-0 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 after:content[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-white after:opacity-70 hover:after:opacity-100`} aria-label='Previous'><svg className="relative fill-transparent block z-[1] w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><title>Left</title><polyline points="15 18 9 12 15 6"></polyline></svg></button>
                        <button ref={nextref} className={`hidden z-[1] md:block border-0 absolute top-1/2 right-0 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 after:content[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-white after:opacity-70 hover:after:opacity-100`} aria-label='Previous'><svg className="relative fill-transparent block z-[1] w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><title>Right</title><polyline points="9 18 15 12 9 6"></polyline></svg></button>
                    </div>
                    {/* Product info */}
                    <div className="mt-2.5 text-[16px]">
                        <div>
                            <Link to={`/product/${product.slug}`} className="flex flex-wrap relative">
                            <div className="product-price block text-red-400 mb-4 ">
                                Rs.{product.price}
                            </div>
                            <div className="product-title clear-both w-full">
                                {product.title}
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureSlide
