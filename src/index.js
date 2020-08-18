const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const cors = require('cors')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const compression = require('compression')

const { PORT } = require('./environments')

// reduce size file
app.use(compression())
cors()

http.listen(PORT, () => {
    console.log(
        'Express server listen on port ',
        PORT,
        `in ${app.settings.env} mode`
    )
})
