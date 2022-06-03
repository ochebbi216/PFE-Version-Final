const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const AdminSchema = mongoose.Schema({
    firstname : {
        type: String,
        required: true,
    },
    lastname : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
    },

    password : {
        type: String,
        required: true,
        minlength: [8, 'Password must be atleast 8 character long']
    },
    isAdmin : {
        type: Boolean,
        default:true,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    }
});

const Admin = module.exports = mongoose.model("Admin", AdminSchema);

module.exports.getUserById = function(id, callback){
    const query = {_id: id};
    Admin.findOne(query, callback);
}

module.exports.getUserByEmail = function(email, callback){
    const query = {email: email};
    Admin.findOne(query, callback);
}

// module.exports.getUserByFirstname = function(firstname, callback){
//     const query = {firstname: firstname};
//     Admin.findOne(query, callback);
// }

module.exports.addUser = function(newUser, callback){
    // Admin.findOne({username : newUser.username}, (err, admin) => {
    //     if(admin) {
    //         callback(new Error("Username already registered."), admin);
    //     }
    //     else {
            Admin.findOne({email: newUser.email}, (err, admin) => {
                if(admin) {
                    callback(new Error("Ce email est déjà registré."), admin);
                }
                else {
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if(err) throw err;
                            newUser.password = hash;
                            newUser.save(callback);
                        });
                    });
                }
            })
        }
//     });
// }

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}