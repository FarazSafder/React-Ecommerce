import axios from 'axios'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { AnnouncementBar,Header } from './Index'

function App() {

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
