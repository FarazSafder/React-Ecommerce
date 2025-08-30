import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function CategoriesSlider() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('/api/v1/categories').then((res) => (setCategories(res.data)))
    }, [])

    return (
        <>
            <div className="pt-[50px]">
                <div className="max-w-[800px] px-[16px] md:px-[30px] mx-auto text-[#373a36]">
                    <div className="text-center">
                        <h2 className="mb-5 text-7xl/[1.2]">Lorem Ipsum</h2>
                        <div className="text-[1.2rem]/[1.6] md:text-[1.3rem]">
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-[40px] md:px-[80px] max-w-[1480px]">
                <div className="py-[30px] px-[30px] xl:py[40px] xl:py-[40px]">
                    <div className="max-w-[850px] mx-auto transform -translate-x-[20px] flex flex-wrap flex-row -mb-[-30px] justify-around">
                        {categories.map((cat) => (
                            (cat.image) &&
                            <div className="w-1/2 md:w-1/4 mb-[40px] xl:pl-[20px] grow shrink-0 basis-auto" key={cat.name}>
                                <div className="mb-4 relative max-w-[120px] mx-auto">
                                    <Link to={cat.slug}>
                                        <div className="mx-auto max-w-64">
                                            <div className="relative pt-[140%]">
                                                <picture>
                                                    <source srcSet={cat.image} type="image/webp" />
                                                    <img src={cat.image} alt={cat.name} loading="lazy" className="absolute w-full h-full object-cover top-0 left-0" />
                                                </picture>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="text-center">
                                    <p>{cat.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoriesSlider
