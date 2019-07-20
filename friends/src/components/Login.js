import React from "react";

class Login extends React.Component{
  constructor(){
    super()
    this.state = {
      username: "",
      password: "",
    }
  }
  
  handleChange = (evt) => {
    evt.preventDefault()

    this.setState({
      [evt.target.name]:  evt.target.value,
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(this.state)
  }

  render(){
    const { username, password } = this.state
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="Username" value={username} onChange={this.handleChange}/>
          <br/><br/>
          <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange}/>
          <br/><br/>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default Login;