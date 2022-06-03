const Capteur = require('../models/capteur');

exports.create = (req,res)=>
    {
        const {body}=req;
        let capToSave = new Capteur(body);
        capToSave.save()
        .then((success) => {
            console.log("the new Capteur is : ", success);
            res.send(success);
            // res.json({success: true, msg: "Capteur est registrer."});

        })
        .catch((error) => {
            console.log("Capteur not saved :( ", error);
            res.status(400).send(error);

        });
        // Capteur.addUser(newCapteur, (err, data)=> {
        //     if(err){
        //         res.json({success: false, msg: err.message});
        //     }
        //     else {
        //         res.json({success: true, msg: "Ce Capteur est registeré avec succes."});
        //     }
        // });

    };

exports.findAll = (req, res) => {
    Capteur.find()
        .then((success) => {
            console.log("all my Capteurs are : ", success);
            res.send(success)
        })
        .catch((error) => {
            console.log(error);
            res.send(error)
        })
};

exports.findById = (req, res) => {
    const { id } = req.params;
    Capteur.findById({ _id: id })
        .then((success) => {
            console.log(`le Capteur ${id} est :`);
            res.send(success)
        })
        .catch((error) => {
            console.log(error);
            res.send(error)
        })
}
// exports.update= (req, res) => {
//     Capteur.findByIdAndUpdate(
//         req.params.id,
//         {
//           $set: req.body,
//         },
//         (error, data) => {
//           if (error) {
//             return next(error)
//             console.log(error)
//           } else {
//             res.json(data)
//             console.log('Data updated successfully')
//           }
//         },
//       )}


// exports.update= (req, res) => {
//     const { id } = req.params;
//     const { body } = req;
//     Capteur.findOneAndUpdate({ _id: id }, body)
//         .then((success) => {
//             console.log(`Capteur ${id} est modifié :) `, success);
//             res.send(success)
//         })
//         .catch((error) => {
//             console.log('Capteur not updated !');
//             res.send(error)
//         })

// }

exports.update = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    console.log('req'+ req);

    // if (filen.length > 0) {
    //     body.img = filen;
    // }
    // body.img = filen;
    Capteur.findOneAndUpdate({ _id: id }, body)
        .then((success) => {
             console.log(`le capteur ${id} est modifié :) `);
            // filen = '';
            // console.log('body'+ body);
            res.send(success)
        })
        .catch((error) => {
            res.send(error)
        })

}



exports.delete = (req, res) => {
    const { id } = req.params;
    Capteur.findOneAndDelete({ _id: id })
        .then((success) => {
            res.send('Le Capteur est supprimé :) ');
            res.send(success)
        })
        .catch((error) => {
            console.log('Capteur not deleted !');
            res.send(error)
        })

}