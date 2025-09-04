import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()
    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: 'Collections',
            slug: '/categories'
        }
    ]
    const subNavItem = [
        {
            name: "Clothes",
            slug: "clothes",
            id: 7
        },
        {
            name: "Electronics",
            slug: "electronics",
            id: 8
        },
        {
            name: "Furniture",
            slug: "furniture",
            id: 9
        },
        {
            name: "Shoes",
            slug: "shoes",
            id: 10
        },
        {
            name: "Miscellaneous",
            slug: "miscellaneous",
            id: 11
        },
        {
            name: "Grocery",
            slug: "grocery",
            id: 12
        },
        {
            name: "Computer Category",
            slug: "computer-category",
            id: 13
        },
        {
            name: "New category August",
            slug: "new-category-august",
            id: 14
        }
    ]
    return (
        <header>
            <div className='flex py-[10px] shadow-lg'>
                <div className="flex">
                    <img src="https://cdn.shopify.com/s/files/1/0716/6761/3975/files/farazsafder-high-resolution-logo-transparent.png?v=1756541679" width={200} alt="" />
                </div>
                <ul className='hidden md:flex'>
                    {
                        navItems.map((item) => (
                            <li key={item.name} onClick={() => navigate(item.slug)} className='inline-block px-6 py-2 duration-200 hover:underline rounded-full group relative'>
                                {item.name}

                                {item.name === "Collections" && (<div className='absolute w-full left-0 mt-2 hidden group-hover:block cursor-pointer bg-white'> <ul>{subNavItem.map((subitem) => (

                                    <li className='p-1' key={subitem.name} onClick={() => navigate(`/${item.slug}/${subitem.slug}`)}>{subitem.name}</li>

                                ))} </ul></div>)}
                            </li>
                        ))
                    }
                </ul>
                <div>

                </div>
            </div>
        </header>
    )
}

export default Header
