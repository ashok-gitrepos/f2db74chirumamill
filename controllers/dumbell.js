var dumbell = require('../models/dumbell'); 
 
// List of all dumbell 
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
        res.render('dumbell', { title: 'dumbell Search Results', results: thedumbells }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// Handle dumbell create on POST. 
exports.dumbell_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new dumbell(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"Earp_Name":"Applepods", "Earp_Type":"Medium", "Earp_Size":3.5} 
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



// Handle dumbell update form on PUT. 
exports.dumbell_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`) 
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
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
}; 
  


// Handle dumbell delete on DELETE. 
exports.dumbell_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await dumbell.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.dumbell_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await dumbell.findById( req.query.id) 
        res.render('dumbelldetail',  { title: 'dumbell Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a dumbell. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.dumbell_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('dumbellcreate', { title: 'dumbell Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a dumbell. 
// query provides the id 
exports.dumbell_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await dumbell.findById(req.query.id) 
        res.render('dumbellupdate', { title: 'dumbell Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.dumbell_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await dumbell.findById(req.query.id) 
        res.render('dumbelldelete', { title: 'dumbell Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 