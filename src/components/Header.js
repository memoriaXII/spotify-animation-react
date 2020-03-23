import React from 'react'
import { Cover, Navbar } from './index'

const Header = ({ y, album }) => {
  return (
    <>
      <Navbar {...{ y, artist: album.artist }} />
      <Cover {...{ y, album }} />
    </>
  )
}

export default Header
