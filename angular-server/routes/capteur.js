const router = require('express').Router();

const CapteurController = require('../controllers/capteur');

router.post('/add', CapteurController.create);
router.get('/all', CapteurController.findAll);
router.get('/getbyid/:id', CapteurController.findById);
router.put('/update/:id', CapteurController.update);
router.delete('/delete/:id', CapteurController.delete);




module.exports = router;