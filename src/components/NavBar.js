import React from 'react'
import styled from 'styled-components'

import { faChevronLeft, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useSpring, interpolate, animated } from 'react-spring'

export const NAV_HEIGHT = 72
export const NAV_BOTTOM_PADDING = 16

const Navigation = styled.div`
  z-index: 3;
  position: sticky;
  top: 0;
  left: 0;
  height: ${NAV_HEIGHT}px;
  padding: 0 16px ${NAV_BOTTOM_PADDING}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
`

const GoBack = styled(FontAwesomeIcon)`
  color: white;
`

const Artist = styled(animated.div)`
  color: white;
  font-weight: bold;
`

const Menu = styled(FontAwesomeIcon)`
  color: white;
`

const NavBar = ({ y, artist }) => {
  const [{ scrollY }, set] = useSpring(() => ({ scrollY: 0 }))
  set({
    scrollY: y
  })
  return (
    <Navigation>
      <GoBack icon={faChevronLeft} />
      <Artist
        style={{
          opacity: scrollY
            .interpolate({
              range: [20, 200],
              output: [0, 1],
              extrapolateRight: 'clamp'
            })
            .interpolate(x => x)
        }}
      >
        {artist}
      </Artist>
      <Menu icon={faEllipsisV} />
    </Navigation>
  )
}

export default NavBar
