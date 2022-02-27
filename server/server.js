const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const http = require('http')

// get the process ID of Node Server
const processId = process.pid

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(
    `Server Started in process ${processId}\nListening on port ${PORT}`
  )
})
