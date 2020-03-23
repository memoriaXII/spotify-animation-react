import React from 'react'
import styled from 'styled-components'

import { Header, Content } from './components'

const Device = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 24px -4px rgba(0, 102, 27, 1);
  -moz-box-shadow: 0px 0px 24px -4px rgba(0, 102, 27, 1);
  box-shadow: 0px 0px 24px -4px rgba(0, 102, 27, 1);
  position: relative;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0;
  }
`

class Spotify extends React.Component {
  state = {
    y: 0
  }
  handleScroll = e => {
    let element = e.target
    this.setState({ y: element.scrollTop })
  }

  render() {
    const { album } = this.props
    const { y } = this.state
    return (
      <Device onScroll={this.handleScroll}>
        <Header {...{ y, album }} />
        <Content {...{ y, album }} />
      </Device>
    )
  }
}

export default Spotify
