const { sign, verify } = require('jsonwebtoken')

const { PRIVATE_KEY } = require('@environments')

/**
 * Returns token.
 *
 * @remarks
 * This method is part of the {@link utils/jwt}.
 *
 * @param user - 1st input
 *
 * @returns The access token mean of `user`
 *
 */

const generateToken = async (user) => {
    return await sign(
        {
            _id: user._id
        },
        PRIVATE_KEY
    )
}

/**
 * Returns user by verify token.
 *
 * @remarks
 * This method is part of the {@link utils/jwt}.
 *
 * @param token - 1st input
 *
 * @returns The user mean of `token`
 */

const verifyToken = async (token) => {
    let currentUser
    const { _id } = await verify(token, PRIVATE_KEY)
    return _id
}

module.exports = {
    generateToken, 
    verifyToken
}