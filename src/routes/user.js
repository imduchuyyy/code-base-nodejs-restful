const express = require('express')
const { checkAuth } = require('../middlewares')
const router = express.Router()

router.get('/', (req, res, next) => checkAuth(req, res, next, 'ADMIN'), async (req, res, next) => {
    try {
        // const formatUsers = await User.find().select('-password -orders')
		return res.status(200).json(formatUsers)
    } catch (err) {
        return res.status(500).json({ message: error })
    }
})

module.exports = router