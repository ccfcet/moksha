const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.nextJS.render(req, res, '/'));

router.get('*', (req, res) => res.nextJS.handle(req, res));

module.exports = router;
