// let User = require('../Model/user')
// let bcrypt = require('bcryptjs')
// let jwt = require('jsonwebtoken')
const LoginForm = document.getElementById("login-form");
const errorMsg = document.getElementById("error-msg");
const successMsg = document.getElementById("success-msg");
const btnSubmit = document.getElementById("btn-submit");
const showPassword = document.getElementById("showPassword");
var authentication = false;
const User = require('../Model/user')

// const express = require(express);
// var app = express();

showPassword.onclick = () => {
    if(password.type === "password"){
        password.type = "text";
    }
    else{
        password.type = "password"
    }
    
}

btnSubmit.addEventListener("click", (p) => {
    p.preventDefault();
    var email = LoginForm.email.value
    var password = LoginForm.password.value

    User.findOne({$or: [{email:email}, {phone:email}] })
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, function(err, result) {
                if(err){
                    res.json({error: err})
                }
                if(result){
                   //let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn: '2h'})
                   res.sendFile(__dirname+ '../public/calculator.html');
                
                    
                }
                else{
                    res.json({
                        message: "Email or Password Invalid!"
                    })
                }

            })

        }
        else {
            res.json({message: 'No user found!'})
        }
    })
    .catch(error => {
        res.json({
            message:"No user found!"
        })
    })


})

btnSubmit.addEventListener("click", (p) => {
    p.preventDefault();
    const email = LoginForm.email.value;
    const password = LoginForm.password.value;


})

    // if(authentication){
    //     app.get('/', function(req, res) {
    //         res.sendFile(path.join(__dirname, '../public/calculator.html'));
    //       });
    // }


//     if (email === "kaviul111@gmail.com" && password === "123422") {
          
    
//     successMsg.classList.remove("visually-hidden");
//        errorMsg.classList.add("visually-hidden");
    
//     }

//     else{
//         successMsg.classList.add("visually-hidden");
//         errorMsg.classList.remove("visually-hidden");

//     }
// })



