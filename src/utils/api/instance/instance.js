import axios from "axios"
const instance = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
})
export { instance }
