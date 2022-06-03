
const router = require('express').Router();
const passport = require ("passport");
const UserController = require('../controllers/user');
const jwtHelper = require('../config/jwtHelper');

const multer = require('multer');
const BlogStorage = multer.diskStorage(
    {
        destination: './assets/user_files',
        filename: (res, file, cb) => {
            filen = Date.now() + '.' + file.mimetype.split('/')[1];
            cb(null, filen);
        }
    })

const upload = multer({ storage: BlogStorage });
router.post('/register', UserController.register);
router.post('/login', UserController.login);

router.post('/add', UserController.create);
router.get('/all', UserController.findAll);
router.get('/getbyid/:id', UserController.findById);
router.put('/update/:id', UserController.update);
router.delete('/delete/:id', UserController.delete);


module.exports = router;


