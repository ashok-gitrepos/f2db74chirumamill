var express = require('express');
var dumbell_controller = require('../controllers/dumbell');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('dumbell', { title: 'Search Results for dumbell Class' });
// });

/* GET dumbell */ 
router.get('/', dumbell_controller.dumbell_view_all_Page ); 

// GET request for one dumbell. 
router.get('/dumbells/:id', dumbell_controller.dumbell_detail);

/* GET detail dumbell page */ 
router.get('/detail', dumbell_controller.dumbell_view_one_Page); 

/* GET create dumbell page */ 
router.get('/create', dumbell_controller.dumbell_create_Page); 

/* GET create update page */ 
router.get('/update', dumbell_controller.dumbell_update_Page);

/* GET delete dumbell page */ 
router.get('/delete', dumbell_controller.dumbell_delete_Page); 

module.exports = router;