import React, { Component } from 'react'

 class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'vishwas'
      }
      console.log('LifecycleB constructor')
    }
    static getDerivedStateFromProps(props, state){
       console.log('lifecycleB getDrivedStateFromProps');
        return null
    }
    componentDidMount(){
        console.log("lifecycleB componentDidmount");
    }
    shouldComponentUpdate(){
        console.log('lifecycleB shouldComponentUpdate');
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('lifecycleB getsnapshotBeforeUpdate');
        return null
    }
    componentDidUpdate(){
        console.log('lifecycleB componentDidUpdate');
    }


    render() {
        console.log("lifecycleB render");
    return (
      <div>
        LifecycleB
      </div>
    )
  }
}

export default LifecycleB