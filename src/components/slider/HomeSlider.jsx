import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Autoplay } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/scrollbar';

function HomeSlider() {
    return (
        <Swiper scrollbar={{ hide: true }} autoplay={{ delay: 5000 }} modules={[Autoplay, Scrollbar]} className='mySwiper'>
            <SwiperSlide>
                <div className="w-full h-full relative">
                    <div className="w-full h-full pt-7 min-h-[75svh]">
                        <img src="https://images.pexels.com/photos/7679731/pexels-photo-7679731.jpeg" loading='lazy' className="absolute w-full h-full top-0 left-0 object-cover object-center" alt="" />
                    </div>
                    <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-black opacity-15"></div>
                    <div className="p-1 md:p-5 absolute top-1/2 left-1/2 w-full max-w-[1200px] -translate-1/2">
                        <div className="p-7 md:max-w-[60%]">
                            <h1 className="text-white text-2xl md:text-6xl font-bold uppercase">Everyday Yoga Essentials</h1>
                            <div className="mt-[10px] text-white text-[16px] md:text-2xl"><p>To assist and elevate your practice</p></div>
                            <div className="flex gap-1 mt-[10px]">
                                <button className="bg-white py-[13px] px-[20px] text-[12px] uppercase hover:bg-gray-200">shop props</button>
                                <button className="bg-white py-[13px] px-[20px] text-[12px] uppercase hover:bg-gray-200">shop props</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-full relative">
                    <div className="w-full h-full pt-7 min-h-[75svh]">
                        <img src="https://images.pexels.com/photos/341392/pexels-photo-341392.jpeg" loading='lazy' className="absolute w-full h-full top-0 left-0 object-cover object-center" alt="" />
                    </div>
                    <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-black opacity-15"></div>
                    <div className="p-1 md:p-5 absolute top-1/2 left-1/2 w-full max-w-[1200px] -translate-1/2">
                        <div className="p-7 ml-auto md:max-w-[50%]">
                            <h1 className="text-white text-2xl md:text-6xl font-bold uppercase">Everyday Yoga Essentials</h1>
                            <div className="mt-[10px] text-white text-[16px] md:text-2xl"><p>To assist and elevate your practice</p></div>
                            <div className="flex gap-1 mt-[10px]">
                                <button className="bg-white py-[13px] px-[20px] text-[12px] uppercase hover:bg-gray-200">shop props</button>
                                <button className="bg-white py-[13px] px-[20px] text-[12px] uppercase hover:bg-gray-200">shop props</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default HomeSlider
