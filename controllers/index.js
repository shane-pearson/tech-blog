const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardroutes = require('./dashboardroutes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardroutes);
router.use('/api', apiRoutes);

module.exports = router;
