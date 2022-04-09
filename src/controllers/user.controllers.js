const User = require('../models/user.model.js');
const db = require('../../config/db.config')

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong while getting list of users."
        });
    });
};

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Please fill all required field"
        });
    }
console.log("DATA SAVED")
// db.users.insertOne(req.body);
//  Create a new User
 const user = new User({
     academic:req.body.academic,
     year:req.body.year,
     semester:req.body.semester,
     branch:req.body.branch,
     course:req.body.course,
     name:req.body.name,
     community_admitted:req.body.community_admitted,
     community_student:req.body.community_student,
     mode:req.body.mode,
     score:req.body.score,
     account:req.body.account,
     bank:req.body.bank,
     ifsc:req.body.ifsc,
     phonenumber:req.body.phonenumber,
     email:req.body.email,
     arrear:req.body.arrear,
     attendance:req.body.attendance,
     remark:req.body.remark

 });
    console.log(user);
    // Save user in the database
    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong while creating new user."
        });
    });
};
// Find a single User with a id
exports.findOne = (req, res) => {
    User.findById(req.params.id)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });            
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error getting user with id " + req.params.id
        });
    });
};

// Update a User identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Please fill all required field"
        });
    }

    // Find user and update it with the request body
    User.findByIdAndUpdate(req.params.id, {
        academic:req.body.academic,
        year:req.body.year,
        semester:req.body.semester,
        branch:req.body.branch,
        course:req.body.course,
        name:req.body.name,
        community_admitted:req.body.community_admitted,
        community_student:req.body.community_student,
        mode:req.body.mode,
        score:req.body.score,
        account:req.body.account,
        bank:req.body.bank,
        ifsc:req.body.ifsc,
        phonenumber:req.body.phonenumber,
        email:req.body.email,
        arrear:req.body.arrear,
        attendance:req.body.attendance,
        remark:req.body.remark

    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.id
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "user not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error updating user with id " + req.params.id
        });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.id)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.id
            });
        }
        res.send({message: "user deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "user not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.id
        });
    });
};
