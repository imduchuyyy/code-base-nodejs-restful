const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const cors = require('cors')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const compression = require('compression')
const UserRoute = require('./routes/user')

const { PORT } = require('./environments')
const { mongoose } = require('./helper')

// reduce size file
app.use(compression())
cors()

app.use('/user', UserRoute)

// connected mongo database
mongoose.connection.on('error', () => {
	console.log('❌  error occurred from the mongo database')
})
mongoose.connection.once('open', () =>
	console.log('🌨  Connected successfully to mongo database')
)

http.listen(PORT, () => {
    console.log(
        'Express server listen on port ',
        PORT,
        `in ${app.settings.env} mode`
    )
})
