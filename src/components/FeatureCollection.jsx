import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FeatureSlide } from '../Index'

function FeatureCollection() {
    const [featureProducts, setfeatureProducts] = useState([])

    useEffect(() => {
        axios.get('/api/v1/products').then((products) => (
            setfeatureProducts(products.data)
        ))
    }, [])

    return (
        <>
            <div className="mt-[30px] mb-2.5">
                <div className='max-w-[800px] px-[16px] md:px-[40px] mx-auto'>
                    <div className="text-center">
                        <div className="mb-[1em] text-[1.36em]/[1.6]">
                            <h1 className="text-[50px]">Dive In to Fresh Finds</h1>
                        </div>
                        <div className="mt-[calc(0rem-20px)] mr-[-0.5em] mb-0 ml-0">
                            <Link to="#" className="mx-[0.5em] mt-2.5 hover:underline">Shop New Arrivals</Link>
                        </div>
                    </div>

                </div>
            </div>
            {/* Featture collection list */}
            <div className="feature_container">
                <div className="max-w-[1480px] px-0 md:px-[40px]">
                    <Swiper slidesPerView={2} pagination={false} breakpoints={{ 768:{slidesPerView: 3,spaceBetween: 20}, 1024: {slidesPerView: 4,spaceBetween: 30} }} className="fproductslider">
                        {featureProducts.slice(0, 10).map((product) => (
                            <SwiperSlide key={product.title}>
                                <FeatureSlide {...product}></FeatureSlide>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default FeatureCollection
