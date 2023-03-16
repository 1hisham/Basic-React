import React, { Component } from 'react'
import withCounder from './withCounder'

class HoverCounter extends Component {
  
  render() {
    const { count, incrementCount } = this.props
    return (
      
        <h2 onMouseOver={incrementCount}> hoverd { count } times</h2>

    )
  }
}

export default withCounder(HoverCounter,5)