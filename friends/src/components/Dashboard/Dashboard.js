import React from "react";
// import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

class Dashboard extends React.Component{
  logout = (evt) => {
    evt.preventDefault()
    localStorage.removeItem("token")
    this.props.history.push("/login")
  }

  render(){
    return(
      <div>
        <h1>Friends</h1>
        <Link to ="/friends">Friends List</Link><br/>
        <button onClick={this.logout}>Logout</button>
      </div>
    )
  }
}

export default withRouter(Dashboard);