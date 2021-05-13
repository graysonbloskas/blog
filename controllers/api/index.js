const router = require('express').Router();

// requiring user routes
const userRoutes = require('./user-routes');

// use user route
router.use('/users', userRoutes);

module.exports = router;