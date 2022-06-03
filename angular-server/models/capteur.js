const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Capteur = Schema({
    nom : {
        type: String,
        required: true,
    },
    type : {
        type: String,
        required: true,
    },
    numCapteur : {
        type: Number,
        required: true,
        
    },
    valeur : {
        type: Number,
        required: true,
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
module.exports = mongoose.model("Capteur", Capteur);
// const mongoose = require('mongoose');

// let Capteur = mongoose.model('Capteur',{
//     nom:String,
//     type:String,
//     numCapteur:Number,
//     valeur:Number,
//     nomUtilisateur:Number,
// })

// module.exports = Capteur;

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// // Define collection and schema
// let Capteur = new Schema({
//     nom : {
//         type: String,
//         required: true,
//     },
//     type : {
//         type: String,
//         required: true,
//     },
//     numCapteur : {
//         type: Number,
//         required: true,
        
//     },
//     valeur : {
//         type: Number,
//         required: true,
//     },
//     nomUtilisateur : {
//         type: String,
//         required: true,
//     },
//     date : {
//         type: Date,
//         // required: true,
//         default: Date.now,
//     },
// }, {
//    collection: 'capteurs'
// })

// module.exports = mongoose.model('Capteur', Capteur)