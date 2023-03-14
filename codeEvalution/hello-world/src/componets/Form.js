import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: "",
         topic:'react'
      }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username:event.target.value
        })
    }
    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }
    
  render() {
    return (
     <form>
        <div>
            <label>Username</label>
            <input type='text' value={this.state.username} onChange={this.handleUsernameChange} />
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
        </div>
        <div>
            <label>Topics</label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
                <option value="react">React</option>
                <option value="anguler">anguler</option>
                <option value="vue">vue</option>
            </select>

        </div>
        <button type='submit'>submit</button>
     </form>
    )
  }
}

export default Form
