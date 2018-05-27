var express = require('express');
var router = express.Router();
var notesController = require('../controllers/notes.controller');
var asyncController = require ('../controllers/async.controller');

router.get('/', asyncController.homePage);
router.post('/', notesController.noteByMember);


router.get('/newnote', notesController.allUsersNotes);
router.post('/newnote', notesController.createNote);

module.exports = router;