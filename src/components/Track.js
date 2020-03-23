import React from 'react'
import styled from 'styled-components'

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
`

const Song = styled.div`
  color: white;
`

const Name = styled.div`
  font-size: 13px;
`
const Artist = styled.div`
  font-size: 10px;
  padding-top: 4px;
  color: lightgray;
`

const Icon = styled(FontAwesomeIcon)`
  color: lightgray;
  font-size: 13px;
`

const Track = ({ track, key, artist }) => {
  return (
    <Row>
      <Song>
        <Name>{track.name}</Name>
        <Artist>{artist}</Artist>
      </Song>
      <Icon icon={faEllipsisV} />
    </Row>
  )
}

export default Track
