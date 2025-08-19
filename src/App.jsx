import axios from 'axios'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { AnnouncementBar } from './Index'

function App() {

  return (
    <>
      <AnnouncementBar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
