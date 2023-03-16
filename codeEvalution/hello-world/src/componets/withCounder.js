import React from "react";

const withCounder = (WrappedComponent , incrementNumber) => {
    class WithCounder extends React.Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
          incrementCount = () => {
              this.setState(prevState => {
                  return {count: prevState.count + incrementNumber }
              })
          }
        render(){
            return <WrappedComponent count={this.state.count} incrementCount ={this.incrementCount}{...this.props}/>
        }
    }
    return WithCounder
}

export default withCounder