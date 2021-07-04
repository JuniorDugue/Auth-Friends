import axios from "axios";

const axios = () => {
  const token = localStorage.getItem("token")
  return axios.create({
    headers : { authorization: token }
  })
}

export default axios;