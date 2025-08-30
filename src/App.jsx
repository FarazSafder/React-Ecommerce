import axios from 'axios'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { AnnouncementBar, Header, Instagram } from './Index'

function App() {
  const posts = [
    {
      image: 'https://images.pexels.com/photos/704748/pexels-photo-704748.jpeg',
      url: '#'
    },
    {
      image: 'https://images.pexels.com/photos/792777/pexels-photo-792777.jpeg',
      url: '#'
    },
    {
      image: 'https://images.pexels.com/photos/236235/pexels-photo-236235.jpeg',
      url: '#'
    },
    {
      image: 'https://images.pexels.com/photos/4474754/pexels-photo-4474754.jpeg',
      url: '#'
    }
  ]

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Instagram posts={posts} />
    </>
  )
}

export default App
