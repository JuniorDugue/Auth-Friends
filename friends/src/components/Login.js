import React from "React";

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
  render(){
    const { username, password } = this.state
    return(
      <div>
        <form>
          <input type="text" name="username" placeholder="Username" value={username} onChange={this.handleChange}/>>
          <br></br>
          <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}

export default Login;