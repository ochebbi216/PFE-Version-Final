const router = require('express').Router();

const PasserelleController = require('../controllers/passerelle');

router.post('/add', PasserelleController.create);
router.get('/all', PasserelleController.findAll);
router.get('/getbyid/:id', PasserelleController.findById);
router.put('/update/:id', PasserelleController.update);
router.delete('/delete/:id', PasserelleController.delete);




module.exports = router;