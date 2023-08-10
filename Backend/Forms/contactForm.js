const express= require('express');
//const app = express();
const formData = require('../Model/formData');

const formSubmit = (req,res) => {
    // bcrypt.hash(req.body.password, 10, function(err, hashedPass){
    //     if(err) {
    //         res.json({
    //             error: err
    //         })
    //     }
        let userData = new formData ({
            name: req.body.name,
            id: req.body.id,
            email: req.body.email,
            message: req.body.message
            
        })
        userData.save()
        .then(userData => {
            res.json({
                message: userData+ 'sent successfully!'
            })
        })
        .catch(error => {res.json({
            message: "An error occured!"
    
        })
    })
}


module.exports = {formSubmit};

