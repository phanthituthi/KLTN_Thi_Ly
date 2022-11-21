const router = require('express').Router();
const UserController = require('../controllers/UserController');

router.get('/search/username/:username', UserController.getByUsername);
router.get('/search/id/:userId', UserController.getById);
router.put('/changepassword', UserController.changepassword);

module.exports = router;
