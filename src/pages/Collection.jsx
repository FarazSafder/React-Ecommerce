import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function Collection() {
    const [collection, setCollection] = useState([])
    const [products, setProducts] = useState([])
    const { slug } = useParams()
    useEffect(() => {
        if (!slug) return
        axios.get(`/api/v1/categories/slug/${slug}`).then(res => (
            setCollection(res.data)
        ))
    }, [slug])

    useEffect(() => {
        if (!collection?.id) return

        axios.get(`/api/v1/categories/${collection.id}/products`).then(res => (
            setProducts(res.data)
        ))
    }, [collection])
    return (
        <div className="collection_container relative">
            <div className="relative overflow-hidden text-white">
                <div className="hidden md:block ">
                    <div className="bg-center bg-no-repeat bg-cover mx-auto" style={{backgroundImage: `url(${collection.image})`}}></div>
                </div>
                <div className="md:hidden bg-center bg-no-repeat bg-cover mx-auto"></div>
                <div className="absolute top-0 left-0 right-0 bottom-0 z-[2] flex items-center">
                    <div className="block relative w-full p-5 md:p-[50px] lg:p-[70px] xl:pl-[150px] xl:py-[70px] xl:pr-[70px]">
                        <div className="max-w-[65ch] mr-auto">
                            <h2 className="text-black">
                                {slug}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product_container">
                <div className="mb-[80px]">
                    <div className="max-w-[1480px] px-4 xl:px-[30px] mx-auto">
                        <div>
                            <div>
                                <div className="mt-5 w-full md:flex md:flex-wrap md:mt-0">
                                    <div className="filters">

                                    </div>
                                    <div className="w-full mb-7">
                                        <div className="flex flex-wrap gap-[16px] md:gap-[32px]">
                                            {/* Product List */
                                                products.map((product) => (


                                                    <div className="w-[calc(50%-16px)] md:w-[calc(25%-32px)] flex flex-col gap-4" key={product.id}>
                                                        <div className="product-image">
                                                            <div>
                                                                <div className="relative">
                                                                    <div>
                                                                        <Link to={`/product/${product.slug}`} className="group">
                                                                            <div className="w-full h-full block relative overflow-hidden">
                                                                                {
                                                                                    product.images.slice(0, 2).map((image, index) => (
                                                                                        <img key={index} src={image} className={`bg-[#000000a] w-full h-full object-cover ${(index > 0) && "left-0 z-10 absolute opacity-0 top-0 group-hover:opacity-100"}`} alt="" />
                                                                                    ))
                                                                                }
                                                                            </div>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-info">
                                                            <Link to={`/product/${product.slug}`} className="">
                                                                <div className="flex felx-wrap cursor-pointer gap-2 justify-between">
                                                                    <p>{product.title}</p>
                                                                    <div className="">
                                                                        <div className="inline-flex gap-2 items-center">
                                                                            <span className="format-currency">Rs.{product.price}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection
