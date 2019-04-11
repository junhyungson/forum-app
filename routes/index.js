const express = require('express');
const router = express.Router();


// Welcome Page
router.get('/', (req, res) => res.render('welcome'));

// Forum
router.get('/forum', (req, res) => res.render('forum'));


module.exports = router;