const express = require('express');
const router = express.Router();
const entryController = require('../controllers/entryController');
const passport = require('passport');



// FACEBOOK ROUTES
//redirect user to FB for authentication. FB redirects user back to app


// GET /auth/google
router.get('/auth/google', 
  passport.authenticate('google', {scope: ['http://www.googleapis.com/auth/plus.login'] }));


// GET /auth.google/callback
router.get('/auth.google/callback',
  passport.authenticate('google', { failureRedirect: '/'}),
  function(req, res) {
    res.redirect('/');
});

module.exports = router;