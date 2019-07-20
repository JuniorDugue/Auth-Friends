import axios from "axios";
import Axios from "./../Axios";

// ACTIONS FOR FETCHING THE DATA
export const FRIEND_FETCH_START = "FRIEND_FETCH_START"; 
export const FRIEND_FETCH_SUCCESS = "FRIEND_FETCH_SUCCESS"; 
export const FRIEND_FETCH_FAILED = "FRIEND_FETCH_FAILED";

export const getFriends = () => dispatch => {
  dispatch ({ type: FRIEND_FETCH_START })
  Axios()
  .get("http://localhost:5000/api/friends")
  .then(res => {
    dispatch ({ type: FRIEND_FETCH_SUCCESS, payload: res.data })
  })
  .catch(err => {
    dispatch ({ type: FRIEND_FETCH_FAILED, payload: err })
  })
}

// ACTIONS FOR LOGINS
export const FRIEND_LOGIN_LOAD = "FRIEND_LOGIN_LOAD";
export const FRIEND_LOGIN_SUCCESS = "FRIEND_LOGIN_SUCCESS"; 
export const FRIEND_LOGIN_FAILED = "FRIEND_LOGIN_FAILED";

export const friendLogIn = () => dispatch => {
  dispatch({ type: FRIEND_LOGIN_LOAD })
  return axios
  .post("http://localhost:5000/api/login")
  .then(res => {
    localStorage.setItem("token", res.data.payload)
    dispatch({ type: FRIEND_LOGIN_SUCCESS })
  })
  .catch(err => {
    dispatch({ type: FRIEND_LOGIN_FAILED, payload: err })
  })
}