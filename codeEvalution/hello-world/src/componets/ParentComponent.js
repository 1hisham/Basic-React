import React, { Children, Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: "parent"
      }
      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`hello ${this.state.parentName} form ${childName}`)
    }
    
    
  render() {
    return (
      <div>
        <ChildComponent greetHandlers = {this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent
