const Passerelle = require('../models/passerelle');

exports.create = (req,res)=>
    {
        const {body}=req;
        let userToSave = new Passerelle(body);
        userToSave.save()
        .then((success) => {
            console.log("the new Passerelle is : ", success);
            res.send(success);
        })
        .catch((error) => {
            console.log("Passerelle not saved :( ", error);
            res.status(400).send(error);
        });
    };

exports.findAll = (req, res) => {
    Passerelle.find()
        .then((success) => {
            console.log("all my Passerelles are : ", success);
            res.send(success)
        })
        .catch((error) => {
            console.log(error);
            res.send(error)
        })
};

exports.findById = (req, res) => {
    const { id } = req.params;
    Passerelle.findById({ _id: id })
        .then((success) => {
            console.log(`le Passerelle ${id} est :`, success);
            res.send(success)
        })
        .catch((error) => {
            console.log(error);
            res.send(error)
        })
}

exports.update= (req, res) => {
    const { id } = req.params;
    const { body } = req;
    Passerelle.findOneAndUpdate({ _id: id }, body)
        .then((success) => {
            console.log(`Passerelle ${id} est modifié :) `, success);
            res.send(success)
        })
        .catch((error) => {
            res.send(error)
        })

}



exports.delete = (req, res) => {
    const { id } = req.params;
    Passerelle.findOneAndDelete({ _id: id })
        .then((success) => {
            console.log(`Le Passerelle ${id} est supprimé :) `, success);
            res.send('Le Passerelle est supprimé')
        })
        .catch((error) => {
            res.send(error)
        })

}
