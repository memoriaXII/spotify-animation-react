import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import Spotify from './Spotify'

import './styles.css'

const album = {
  name: 'Tranquility Base Hotel & Casino Tour',
  artist: 'Artic Monkeys',
  release: 2018,
  cover: 'https://pbs.twimg.com/media/D0UsODIXQAAyWTk?format=jpg&name=large',
  tracks: [
    { name: 'Four Out of Five' },
    { name: 'Brianstorm' },
    { name: 'Crying Lightning' },
    { name: "Don't Sit Down 'Cause I've Moved Your Chair" },
    { name: '505' },
    { name: 'Tranquility Base Hotel & Casino' },
    { name: 'Snap Out Of It' },
    { name: 'Do Me A Favour' },
    { name: 'Cornerstone' },
    { name: "Why'd You Only Call Me When You're High?" },
    { name: 'One Point Perspective' },
    { name: 'Do I Wanna Know?' }
  ]
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1ed760;
`

function App() {
  return (
    <Container>
      <Spotify {...{ album }} />
    </Container>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
