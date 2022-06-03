const Actionneur = require('../models/actionneur');

exports.create = (req,res)=>
    {
        const {body}=req;
        let userToSave = new Actionneur(body);
        userToSave.save()
        .then((success) => {
            console.log("the new Actionneur is : ", success);
            res.send(success);
        })
        .catch((error) => {
            console.log("Actionneur not saved :( ", error);
            res.status(400).send(error);
        });
    };

exports.findAll = (req, res) => {
    Actionneur.find()
        .then((success) => {
            console.log("all my Actionneurs are : ", success);
            res.send(success)
        })
        .catch((error) => {
            console.log(error);
            res.send(error)
        })
};

exports.findById = (req, res) => {
    const { id } = req.params;
    Actionneur.findById({ _id: id })
        .then((success) => {
            console.log(`le Actionneur ${id} est :`, success);
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

    // if (filen.length > 0) {
    //     body.img = filen;
    // }
    // body.img = filen;
    Actionneur.findOneAndUpdate({ _id: id }, body)
        .then((success) => {
             console.log(`le actionneur ${id} est modifié :) `, success);
            // filen = '';
            console.log('body'+ body);
            res.send(success)
        })
        .catch((error) => {
            res.send(error)
        })

}



exports.delete = (req, res) => {
    const { id } = req.params;
    Actionneur.findOneAndDelete({ _id: id })
        .then((success) => {
            res.send('Le Actionneur  est supprimé :) ');
            res.send(success)
        })
        .catch((error) => {
            res.send(error)
        })

}