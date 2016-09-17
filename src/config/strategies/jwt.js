const env = require('../env')
const Promise = require('bluebird')
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: env('SECRET')
}

module.exports = () => {
  const userService = require('../../services/userService')()

  passport.use(new JwtStrategy(jwtOptions, (payload, cb) => {
    userService.getById(payload._doc._id).then(user => {
      if (!user) {
        return Promise.resolve(cb(null, false, {
          message: 'Unknown user'
        }))
      } else {
        return Promise.resolve(cb(null, user))
      }
    }).catch(err => cb(err))
  }))
}