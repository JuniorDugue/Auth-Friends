import React from 'react';
import './App.css';
import Login from "./components/Login";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import FriendList from "./components/FriendList/FriendList";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <h1>Friends</h1>
      <PrivateRoute exact path="/" component={Dashboard}/>
      <Route exact path="/friendLogIn" component={Login}/>
      <ProtectedRoute exact path="/friends" component={FriendList}/>
    </div>
  );
}

export default App;
