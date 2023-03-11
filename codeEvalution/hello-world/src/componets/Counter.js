import React, { Component } from 'react'

 class Counter extends Component {
  constructor(props) {
      super(props)
    
      this.state = {
        count: 0
      }
  }
  increments(){
  //   this.setState({
  //  count: this.state.count + 1
      
  //   },
  //   () => {
      
  //     console.log('callback',this.state.count);
  //   })
    
  this.setState((prevStat) => ({
    count: prevStat.count + 1
  }))
    console.log(this.state.count);
  }
  incrementsFive(){
    this.increments()
    this.increments()
    // this.increments()
    // this.increments()
  }
  
  render() {
    return (
      <div>
        <div>
        count - {this.state.count}
      </div>
      
        <button onClick={() => this.incrementsFive()}>Increment</button>
  
      </div>
      
    ) 
  }
}

export default Counter
