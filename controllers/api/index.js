const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postroutes');
const commentRoutes = require('./commentroutes');

router.use('/users', userRoutes);
router.use('/post', postRoutes);
// router.use('/comment', commentRoutes);

module.exports = router;
