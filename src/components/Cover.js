import React from 'react'
import styled from 'styled-components'

import { animated, useSpring, interpolate } from 'react-spring'

import { NAV_HEIGHT, NAV_BOTTOM_PADDING } from './NavBar'

const COVER_HEIGHT = 150

const Container = styled(animated.div)`
  position: sticky;
  top: ${NAV_HEIGHT + NAV_BOTTOM_PADDING}px;
  left: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 0;
`

const AlbumCover = styled(animated.div)`
  background-image: ${props => props.cover && `url(${props.cover});`};
  background-size: contain;
  width: 150px;
  height: ${COVER_HEIGHT}px;
`

const Artist = styled(animated.div)`
  color: white;
  font-weight: bold;
  padding: 16px 0;
  letter-spacing: 1px;
`

const Cover = ({ y, album }) => {
  const [{ scrollY }, set] = useSpring(() => ({ scrollY: 0 }))
  set({
    scrollY: y
  })

  return (
    <Container>
      <AlbumCover
        style={{
          opacity: scrollY
            .interpolate({
              range: [150, 250],
              output: [1, 0],
              extrapolateRight: 'clamp'
            })
            .interpolate(x => x)
        }}
        cover={album.cover}
      />
      <Artist>{album.artist}</Artist>;
    </Container>
  )
}

export default Cover
