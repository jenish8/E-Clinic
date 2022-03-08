var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var authModal = require('../model/register');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcrypt');

var options = {}
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = 'Ymj@123';

passport.use(new LocalStrategy({
    usernameField: 'uname',
    passwordField: 'password'
},
function(username, password, done){
    authModal.findOne({
        where: {
            uname: username
        }
    })
    .then((user) => {
        if (!user){
            return done(null, false, {
                message: 'User does not exist'
            });
        }
        bcrypt.compare(password, user.password, function(err, result) {
            if(!result){
                return done(null, false, {message: 'Incorrect Password'} );
            }
            return done(null, user);
        })
    })
    .catch((error) => {
        return done(null, false, {
            message: 'Something went wrong with your sigin'
        });
    });
}
))

passport.use(new JwtStrategy(options, function(jwtPayload, done){
    authModal.findByPk(jwtPayload.sub)
    .then((result) => {
        if(result === undefined){
            return done(null, false)
        }
        return done(null, result)
    })
    .catch((error) => {
        return done(error, false)
    })
}))
