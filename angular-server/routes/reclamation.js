const router = require('express').Router();

const ReclamationController = require('../controllers/reclamation');

router.post('/', ReclamationController.create);
router.get('/all', ReclamationController.findAll);
router.get('/getbyid/:id', ReclamationController.findById);
router.put('/update/:id', ReclamationController.update);
router.delete('/delete/:id', ReclamationController.delete);




module.exports = router;