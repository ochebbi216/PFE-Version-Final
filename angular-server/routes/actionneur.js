const router = require('express').Router();

const ActionneurController = require('../controllers/actionneur');

router.post('/add', ActionneurController.create);
router.get('/all', ActionneurController.findAll);
router.get('/getbyid/:id', ActionneurController.findById);
router.put('/update/:id', ActionneurController.update);
router.delete('/delete/:id', ActionneurController.delete);




module.exports = router;