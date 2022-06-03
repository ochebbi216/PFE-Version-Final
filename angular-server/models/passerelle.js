const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Passerelle = Schema({
    Nom : {
        type: String,
        required: true,
    },
    Description : {
        type: String,
        
    },
    nomUtilisateur : {
        type: String,
        required: true,
    },
    GPSLong : {
        type: Number,
        required: true,
    },
    GPSLat : {
        type: Number,
        required: true,
    },
    // Sensor1 : {
    //     type: Number,
       
    // },
    // Sensor2 : {
    //     type: Number,
      
    // },
    // Sensor3 : {
    //     type: Number,
       
    // },
    // Sensor4 : {
    //     type: Number,
        
    // },
    // Sensor5 : {
    //     type: Number,
       
    // },

    Date : {
        type: Date,
        default:Date.now,
    },
});
module.exports = mongoose.model("Passerelle", Passerelle);
