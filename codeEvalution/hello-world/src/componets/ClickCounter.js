import React, { Component } from 'react'
import withCounder from './withCounder'

export class ClickCounter extends Component {
    
  render() {
      const { count,incrementCount } = this.props
    return (
        <button onClick={incrementCount}>Clicked { count } times</button>
      
    )
  }
}

export default withCounder(ClickCounter,8)