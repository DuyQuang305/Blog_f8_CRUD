const express = require('express');

const router = express.Router();

const meController = require('../app/controllers/meController');

router.use('/stored/courses', meController.storedCourses);

module.exports = router;
