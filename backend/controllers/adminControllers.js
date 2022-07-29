const { response } = require("../app");
const Model = require("../models/adminModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
class Controller {
    
  getAll(req, res , next ) {
    Model.find({} , (err , response) =>{
      if(err) return next(err);
      res.status(200).send({
        success : true,
        response 
      })
    })
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

//   post(req, res , next ) {
//    let body = req.body;
//    let doc  = new Model(body);
//    doc.save((err,response) =>{
//     if(err) return next(err);
//     res.status(200).send({
//       success : true,
//       response 
//     })
//    })
//   }
signup = (req,res) => {
    const {fullname,email, password} = req.body;

    if(!email || !fullname || !password){
        res.status(400).json({msg: 'Please enter all fields'});
    }

    Model.findOne({email})
    .then(admin => {
        if(admin) return res.status(400).json({msg: 'Admin already exists'});

        const newAdmin = new Model({ email, fullname, password});

        // Create salt and hash
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                if(err) throw err;
                newAdmin.password = hash;
                newAdmin.save()
                    .then(admin => {
                        jwt.sign(
                            { id: admin._id },
                            process.env.JWT_SECRET_KEY,
                            { expiresIn: 3600 },
                            (err, token) => {
                                if(err) throw err;
                                res.json({
                                    token,
                                    admin: {
                                        id: admin._id,
                                        email: admin.email,
                                        fullname: admin.fullname
                                    }
                                });
                            }
                        )
                    });
            })
        })
    })
}

    // Login Function to login as admin
    login = async (req,res) => {
        const { email, password } = req.body;
        if(!email || !password){
            res.status(400).json({msg: 'Please enter all fields'});
        }
        Model.findOne({email})
            .then(admin => {
                if(!admin) return res.status(400).json({msg: 'Admin does not exist'});
    
                // Validate password
                bcrypt.compare(password, admin.password)
                    .then(isMatch => {
                        if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials'});
    
                        jwt.sign(
                            { id: admin._id },
                            process.env.JWT_SECRET_KEY,
                            { expiresIn: 3600 },
                            (err, token) => {
                                if(err) throw err;
                                res.json({
                                    token,
                                    admin: {
                                        id: admin._id,
                                        fullname: admin.fullname,
                                        email: admin.email
                                    }
                                });
                            }
                        )
                    })
            })
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
