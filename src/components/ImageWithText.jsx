import React from 'react'
import { Link } from 'react-router-dom'

function ImageWithText({ desktopimage, mobileimage, heading, text, linktitle, link }) {
  return (
    <div className="w-full">
      <div className="relative overflow-hidden text-white">
        <div className="hidden md:block">
          <div className={`bg-center bg-cover bg-no-repeat`} style={{ backgroundImage: `url(${desktopimage})`}}>
            <div className="pt-[50%]"></div>
          </div>
        </div>
        <div className={`md:hidden bg-center bg-cover bg-no-repeat`} style={{ backgroundImage: `url(${mobileimage})`}} >
          <div className="pt-[86.4%]"></div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex z-[2] text-left items-end ">
          <div className="block relative w-full p-5 md:p-[50px] lg:p-[70px]">
            <div>
              <h2 className="mb-5 text-white text-[46px]/[1.1em] md:text-[58.8px] lg:text-[84px]">{heading}</h2>
              <div className="max-w-[65ch] mr-auto">
                <p className='mb-[1em]'>{text}</p>
                <p>
                  <Link to={link} className="hover:underline">{linktitle}</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageWithText
