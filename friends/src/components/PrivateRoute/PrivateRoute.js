import React from "react";
import { Route, Redirect } from "react-router-dom";

export default functions(props){
  const {
    component: Component, //reassigning component to Component
    ...rest
  } = props

  return(
    <Route {...rest}
    render={()=> {
      const token = localStorage.getItem("token");

      return token
        ? <Component /> //original component
        : <Redirect to = "/login"/> //because we want to redirect the user
    }}
    />
  )
}