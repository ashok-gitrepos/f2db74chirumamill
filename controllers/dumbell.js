var dumbell = require('../models/dumbell');
// List of all dumbells
exports.dumbell_list = function(req, res) {
    res.send('NOT IMPLEMENTED: dumbell list');
};


// for a specific dumbell.
// exports.dumbell_detail = function(req, res) {
//     res.send('NOT IMPLEMENTED: dumbell detail: ' + req.params.id);
// };

exports.dumbell_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await dumbell.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle dumbell create on POST.
exports.dumbell_create_post = async function(req, res) {
    console.log(req.body)
    let document = new dumbell();
    // We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"dumbell_type":"goat", "cost":12, "size":"large"}
    document.Dumbell_brand = req.body.Dumbell_brand;
    document.Dumbell_material = req.body.Dumbell_material;
    document.Dumbell_weight = req.body.Dumbell_weight;
    
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};

exports.dumbell_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: dumbell create POST');
};



// Handle dumbell delete form on DELETE.
exports.dumbell_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: dumbell delete DELETE ' + req.params.id);
};

// Handle dumbell update form on PUT.

// exports.dumbell_update_put = function(req, res) {
//     res.send('NOT IMPLEMENTED: dumbell update PUT' + req.params.id);
// };

exports.dumbell_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await dumbell.findById( req.params.id)
        // Do updates of properties
        if(req.body.Dumbell_brand)
               toUpdate.Dumbell_brand = req.body.Dumbell_brand;
        if(req.body.Dumbell_material) toUpdate.Dumbell_material = req.body.Dumbell_material;
        if(req.body.Dumbell_weight) toUpdate.Dumbell_weight = req.body.Dumbell_weight;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};


exports.dumbell_list = async function(req, res) {
    try{
        thedumbells = await dumbell.find();
        res.send(thedumbells);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};



// VIEWS
// Handle a show all view
exports.dumbell_view_all_Page = async function(req, res) {
    try{
    thedumbells = await dumbell.find();
    res.render('dumbells', { title: 'dumbell Search Results', results: thedumbells });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };


    // for a specific dumbell.
// exports.dumbell_detail = async function(req, res) {
//     console.log("detail" + req.params.id)
//     try {
//     result = await dumbell.findById( req.params.id)
//     res.send(result)
//     } catch (error) {
//     res.status(500)
//     res.send(`{"error": document for id ${req.params.id} not found`);
//     }
//     };



// for a specific dumbell.
exports.dumbell_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await dumbell.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
//Handle dumbell update form on PUT.
