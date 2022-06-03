const Reclamation = require('../models/reclamation');

exports.create = (req, res) => {
    const { body } = req;
    let reclamationToSave = new Reclamation(body);
    reclamationToSave.save()
        .then((success) => {
            console.log("the new reclamation is : ", success);
            res.send(success);
        })
        .catch((error) => {
            console.log("reclamation not saved :( ", error);
            res.status(400).send(error);
        });
};

exports.findAll = (req, res) => {
    Reclamation .find()
        .then((success) => {
            console.log("all my reclamations are : ", success);
            res.send(success)
        })
        .catch((error) => {
            console.log(error);
            res.send(error)
        })
};

exports.findById = (req, res) => {
    const { id } = req.params;
    Reclamation.findById({ _id: id })
        .then((success) => {
            console.log(`le Capteur ${id} est :`, success);
            res.send(success)
        })
        .catch((error) => {
            console.log(error);
            res.send(error)
        })
}

exports.update = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    console.log('req'+ req);

    Reclamation.findOneAndUpdate({ _id: id }, body)
        .then((success) => {
             console.log(`le reclamation ${id} est modifié :) `, success);
            res.send(success)
        })
        .catch((error) => {
            res.send(error)
        })

}




exports.delete = (req, res) => {
    const { id } = req.params;
    Reclamation .findOneAndDelete({ _id: id })
        .then((success) => {
            res.send('reclamation est supprimé ')
            console.log('reclamation  ${id} est supprimé :) ', success);
            // res.send(success)
        })
        .catch((error) => {
            console.log('reclamation  not deleted !');
            res.send(error)
        })

}