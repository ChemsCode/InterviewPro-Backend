const express = require('express');
const router = express.Router();
const openaiController = require('../../controllers/openaiController');


router.post('/', openaiController.postApiResponse)

module.exports = router;