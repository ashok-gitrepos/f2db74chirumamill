var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var dumbell_controller = require('../controllers/dumbell');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// dumbell ROUTES ///
// POST request for creating a dumbell.  
router.post('/dumbells', dumbell_controller.dumbell_create_post);
// DELETE request to delete dumbell.
router.delete('/dumbells/:id', dumbell_controller.dumbell_delete);
// PUT request to update dumbell.
router.put('/dumbells/:id', dumbell_controller.dumbell_update_put);
// GET request for one dumbell.
router.get('/dumbells/:id', dumbell_controller.dumbell_detail);
// GET request for list of all dumbell items.
router.get('/dumbells', dumbell_controller.dumbell_list);
module.exports = router;