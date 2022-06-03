const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Reclamation = Schema({
    objet: {
        type: String,
        required: true,
    },
    nomComplet: {
        type: String,
        required: true,
    },
   
    email : {
        type: String,
        required: true,
    },
    numtel : {
        type: String,
        required: true,
    },
    Date :{
        type: Date,
        default:Date.now
    },
    demande : {
        type: String,
        required: true,
    },

});
module.exports = mongoose.model("Reclamation", Reclamation);


