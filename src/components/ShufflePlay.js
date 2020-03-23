import React from 'react'
import styled from 'styled-components'
import { useSpring, animated, interpolate } from 'react-spring'

import { NAV_HEIGHT, NAV_BOTTOM_PADDING } from './NavBar'

export const BUTTON_HEIGHT = 36
export const BUTTON_WIDTH = 175

const ButtonCase = styled(animated.div)`
  position: sticky;
  top: ${NAV_HEIGHT - BUTTON_HEIGHT / 2 + NAV_BOTTOM_PADDING}px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  z-index: 4;
`

const Button = styled.div`
  border-radius: 32px;
  height: ${BUTTON_HEIGHT}px;
  width: ${BUTTON_WIDTH}px;
  background-color: #1ed760;
  text-align: center;
  span {
    color: white;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 2px;
    line-height: ${BUTTON_HEIGHT}px;
  }
`

const ShufflePlay = ({ y }) => {
  return (
    <ButtonCase>
      <Button>
        <span>SHUFFLE PLAY</span>
      </Button>
    </ButtonCase>
  )
}

export default ShufflePlay
