import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

 class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'vishwas'
      }
      console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props, state){
       console.log('lifecycleA getDrivedStateFromProps');
        return null
    }
    componentDidMount(){
        console.log("lifecycleA componentDidmount");
    }
    shouldComponentUpdate(){
        console.log('lifecycleA shouldComponentUpdate');
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA get snapshot Before update');
        return null

    }
    componentDidUpdate(){
        console.log('lifecycleA componentDidUpdate');
    }
    changeState =() => {
        this.setState({
            name:'Codevol'
        })
    }

    render() {
        console.log("lifecycleA render");
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>change state</button>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA