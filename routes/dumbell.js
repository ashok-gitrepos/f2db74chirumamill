var express = require('express');
const dumbell_controlers= require('../controllers/dumbell');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   //res.render('dumbell', { title: 'Search results dumbell' });
//   router.get('/', dumbell_controlers.dumbell_view_all_Page );
// });



router.get('/', dumbell_controlers.dumbell_view_all_Page );
module.exports = router;