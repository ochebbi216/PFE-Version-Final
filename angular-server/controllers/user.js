const express = require("express");
const jwt = require ("jsonwebtoken");
const User = require("../models/user");
const config = require("../config/database");
require('dotenv').config();
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const log = console.log;
EmailTemplate = require('email-templates-v2').EmailTemplate,
path = require('path'),
Promise = require('bluebird');

exports.create = (req,res)=>
    {
        const {body}=req;
        let userToSave = new User(body);
        userToSave.save()
        .then((success) => {
            console.log("the new user is : ", success);

            res.send(success);
        })
        .catch((error) => {
            console.log("admin not saved :( ", error);
            res.status(400).send(error);
        });
    };

exports.findAll = (req, res) => {
    User.find()
        .then((success) => {
            console.log("all my users are : ", success);
            res.send(success)
        })
        .catch((error) => {
            console.log(error);
            res.send(error)
        })
};

exports.findById = (req, res) => {
    const { id } = req.params;
    User.findById({ _id: id })
        .then((success) => {
            console.log(`le user ${id} est :`, success);

            res.send(success)
        })
        .catch((error) => {
            console.log(error);
            res.send(error)
        })
}

exports.update= (req, res) => {
    const { id } = req.params;
    const { email } = req.params;
    const { body } = req;
    User.findOneAndUpdate({ _id: id }, body)
        .then((success) => {
            console.log(`user ${id} est modifié :) `, success);
            res.send(success)
            transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.email,
                    pass: process.env.pass,
                },
            }),
                transporter.use('compile', hbs({
                viewEngine: 'express-handlebars',
                viewPath: './views/'
            }));

                    //Step 3
                    let users = [
                        {
                            name: 'Jack',
                            email: 'example@example.tld',
                        },
                    
                    ];
                    
                    function sendEmail (obj) {
                        return transporter.sendMail(obj);
                    }
                    
                    function loadTemplate (templateName, contexts) {
                        let template = new EmailTemplate(path.join(__dirname, 'templates', templateName));
                        return Promise.all(contexts.map((context) => {
                            return new Promise((resolve, reject) => {
                                template.render(context, (err, result) => {
                                    if (err) reject(err);
                                    else resolve({
                                        email: result,
                                        context,
                                    });
                                });
                            });
                        }));
                    }
                    
                    loadTemplate('modifEmail', users).then((results) => {
                        return Promise.all(results.map((result) => {
                            sendEmail({
                                to: success.email,
                                from: process.env.email,
                                subject:'Nouvelle modification sur votre compte ' + success.lastname+' '+success.firstname+ ' !',
                                html: result.email.html  ,
                            });
                        }));
                    }).then(() => {
                        console.log('Yay!');
                    })
                      .catch((error)=>{
                        console.log(error.message);
                      })
                      
        })
        .catch((error) => {
            res.send(error)
        })

}



exports.delete = (req, res) => {
    const { id } = req.params;
    User.findOneAndDelete({ _id: id })
        .then((success) => {
            console.log(`Le user ${id} est supprimé :) `, success);
            res.send("L'utilisateur est supprimé")
        })
        .catch((error) => {
            res.send(error)
        })

}
// exports.userProfile = (req, res, next) =>{
//     User.findOne({ _id: req._id },
//         (err, user) => {
//             if (!user)
//                 return res.status(404).json({ status: false, message: 'User record not found.' });
//             else
//                 return res.status(200).json({ status: true, user : _.pick(user,['firstname','lastname','email']) });
//         }
//     );
// }
exports.register = async (req, res) => {
    let newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        // username:req.body.username,
        email: req.body.email,
        password: req.body.password,
        // image:req.body.image,
    });

    User.addUser(newUser, (err, data)=> {
        if(err){
            res.json({success: false, msg: err.message});
        }
        else {
            res.json({success: true, msg: "L'utilisateur est enregistré maintenant."});
            transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.email,
                    pass: process.env.pass,
                },
            }),
            //           // Step 2
                transporter.use('compile', hbs({
                viewEngine: 'express-handlebars',
                viewPath: './views/'
            }));

                    //Step 3
                    let users = [
                        {
                            name: 'Jack',
                            email: 'example@example.tld',
                        },
                    
                    ];
                    
                    function sendEmail (obj) {
                        return transporter.sendMail(obj);
                    }
                    
                    function loadTemplate (templateName, contexts) {
                        let template = new EmailTemplate(path.join(__dirname, 'templates', templateName));
                        return Promise.all(contexts.map((context) => {
                            return new Promise((resolve, reject) => {
                                template.render(context, (err, result) => {
                                    if (err) reject(err);
                                    else resolve({
                                        email: result,
                                        context,
                                    });
                                });
                            });
                        }));
                    }
                    
                    loadTemplate('tempEmail', users).then((results) => {
                        return Promise.all(results.map((result) => {
                            sendEmail({
                                to: newUser.email,
                                from: process.env.email,
                                subject:'Bienvenue '+newUser.lastname+ ' '+newUser.firstname+' '+' Dans Notre Famille ',
                                html: result.email.html,
                            });
                        }));
                    }).then(() => {
                        console.log('Yay!');
                    });
                    
        }
    });
};
exports.login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByEmail(email, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: "Compte non trouvé."});
        }  
        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch) {
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: '1d',
                });
                res.json({
                    succes: true,
                    token: token,
                    user: {
                        id: user._id,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        username:user.username,
                        email: user.email,
                        isAdmin:user.isAdmin


                    }
                });
            }
            else {
                return res.json({success: false, msg: "Mot de passe erroné."});
            }
        });
    });
};