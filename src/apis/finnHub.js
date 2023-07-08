import axios from "axios"

const TOKEN = "ciknv61r01qk492qs3t0ciknv61r01qk492qs3tg"

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params:{
  token: TOKEN
  }
})