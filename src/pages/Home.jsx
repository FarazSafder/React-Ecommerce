import React from 'react'
import { CategoriesSlider, FeatureCollection, HomeSlider, ImageWithText } from '../Index'

export default function Home() {
  const ImageWithText1 = {
    desktopimage: 'https://images.pexels.com/photos/134991/pexels-photo-134991.jpeg',
    mobileimage: 'https://images.pexels.com/photos/26261477/pexels-photo-26261477.jpeg',
    heading: 'The Perfect Swimsuit',
    text: 'It does exist. Supportive, sculpting, and seriously stylish, our swimsuits are made to move with you for a flawless fit that never compromises on comfort — or style.',
    linktitle: 'SHOP SUSTAINABLE SWIM',
    link: '#'
  }

  const ImageWithText2 = {
    desktopimage: 'https://images.pexels.com/photos/8157149/pexels-photo-8157149.jpeg',
    mobileimage: 'https://images.pexels.com/photos/8157161/pexels-photo-8157161.jpeg',
    heading: 'Find Your Fit',
    text: 'We believe great swimwear starts with the perfect fit.',
    linktitle: 'THE FITTING ROOM',
    link: '#'
  }
  return (
    <>
      <HomeSlider />
      <FeatureCollection />
      <ImageWithText {...ImageWithText1} />
      <CategoriesSlider />
      <ImageWithText {...ImageWithText2} />
    </>
  )
}
