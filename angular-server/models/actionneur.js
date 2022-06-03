const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Actionneur = Schema({
    nom : {
        type: String,
        required:true,
    },
    type : {
        type: String,
        required: true,
    },
    numactionneur : {
        type: Number,
        required: true,
    },
    valeur : {
        type: Boolean,
        
    },
    nomUtilisateur : {
        type: String,
        required: true,
    },
    nomPasserelle : {
        type: String,
        required: true,
    },
    date : {
        type: Date,  
        default: Date.now,
    },
});
 module.exports = mongoose.model("Actionneur", Actionneur);
