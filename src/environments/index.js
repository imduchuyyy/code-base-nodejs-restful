require('dotenv').config()

//Application
const PORT = process.env.PORT || 5000

//Database
const DATABASE_NAME = process.env.DATABASE_NAME || 'Code-base-restful'
const MONGO_URL = process.env.MONGO_URL || `mongodb+srv://duchuy:123@cluster0.qxmxe.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`

//Jsonwebtoken
const PRIVATE_KEY = process.env.PRIVATE_KEY || 'duchuy'

//bycrypt
const SALT = process.env.SALT || 10

module.exports = {
    PORT,
    DATABASE_NAME,
    MONGO_URL,
    PRIVATE_KEY,
    SALT
}