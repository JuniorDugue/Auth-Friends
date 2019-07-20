import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import getFriends from "../Action/action";

class FriendList extends React.Component{
  componentDidMount(){
    this.props.getFriends()
  }

  render(){
    return(
      <div>
        <p></p>
      </div>
    )
  }
}

  const mapDispatchToProps = {
    getFriends
  }

export default withRouter(connect(null, mapDispatchToProps)(FriendList))