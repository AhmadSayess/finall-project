const Model = require("../models/postModel");

class Controller {
    
  // getAll(req, res , next ) {
  //   Model.find({} , (err , response) =>{
  //     if(err) return next(err);
  //     res.status(200).send({
  //       success : true,
  //       response 
  //     })
  //   })
  // }

  getAll(req,res,next){
    Model.find().populate("category").exec(function (err, result) {
      if (err) return next(err);
        res.send({
          success : true,
          result
        });
      });
    }

  getbyId(req, res , next ) {
    let {id} = req.params;
    Model.findOne({_id:id} , (err, response) =>{
     if(err) return next(err);
     res.status(200).send({
       success : true,
       response 
     })
    })
  }


  // post(req, res , next) {
  //   let body = req.body;
  //   let doc  = new Model(body);
  //   doc.save((err,response) =>{
  //    if(err) return next(err);
  //    res.status(200).send({
  //      success : true,
  //      response 
  //    })
  //   })
  // }
  async post(req, res, next) {
    const reqFiles = [];
    const url = req.protocol + "://" + req.get("host");
    for (var i = 0; i < req.files.length; i++) {
      reqFiles.push(url + "/images/" + req.files[i].filename);
    }
    let newPost = await new Model({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      image: reqFiles,
    });
    newPost.save({}, (error, response) => {
      if (error) return next(error);
      res.status(200).send({success:true,response});
    });
  }

   put(req, res , next ) {
   let {id} = req.params;
   let body = req.body;
   Model.updateOne({_id:id} , {
    $set: body 
   }, (err , response) =>{
    if(err) return next(err);
    res.status(200).send({
      success : true,
      response 
    })
   })
  }

  delete(req, res , next ) {
    let {id} = req.params;
    Model.findByIdAndDelete({_id:id} , (err, response) =>{
     if(err) return next(err);
     res.status(200).send({
       success : true,
       response 
     })
    })
   }
}

const controller = new Controller();
module.exports = controller;
