import React from 'react'
import Track from './Track'
import ShufflePlay from './ShufflePlay'

import styled from 'styled-components'

const Container = styled.div`
  background: black;
  position: relative;
`

const Content = ({ y, album: { artist, tracks } }) => {
  return (
    <Container>
      <ShufflePlay {...{ y }} />
      {tracks.map((track, key) => (
        <Track key={key + 1} {...{ track, key, artist }} />
      ))}
    </Container>
  )
}

export default Content
