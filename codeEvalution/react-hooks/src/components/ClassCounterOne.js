import React, { Component } from 'react'

class ClassCounterOne extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    componentDidMount(){
        document.title = `cliked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            document.title = `cliked ${this.state.count} times`
            console.log('updateing document title');

        }
        
        
    }
  render() {
    return (
        <div>
                    <input type="text" value={this.state.name} onChange={e => {this.setState({name:e.target.value})}}></input>
        <button onClick={() => this.setState({ count: this.state.count + 1})}> Click {this.state.count} times</button>
      </div>

    )
  }
}

export default ClassCounterOne