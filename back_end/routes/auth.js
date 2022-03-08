var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');

router.post('/login', function(req, res, next) {
    passport.authenticate('local', { session: false }, function(err, user, info) {
        if (err) { return next(err) }
        if (!user) {
            return res.status(500).json(info.message)
        }
        const payload = {
            username: user.uname,
            email: user.email_id
        }
        const options = {
            subject: `${user.id}`,
            expiresIn: '5h'
        }
        const token = jwt.sign(payload, 'Ymj@123', options);
        res.json({ token, user });

    })(req, res, next);
})

module.exports = router