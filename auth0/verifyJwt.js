const { expressjwt: jwt } = require('express-jwt')
const jwks = require('jwks-rsa')

const verifyJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    reateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.JWKSURI
  }),
  audience: process.env.AUDIENCE,
  issuer: process.env.ISSUER,
  algorithms:['RS256'],
})

module.exports = verifyJwt