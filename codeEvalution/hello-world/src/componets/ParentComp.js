import React, { Component,PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'john'
      }
    }

    componentDidMount(){
        setInterval(() =>{
            this.setState({

                name: 'john'
            })
        },2000)
    }
  render() {
    console.log("================parent==============");
    return (
      <div>ParentComp
      <RegComp name={this.state.name} />
      <PureComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp