const Course = require('../models/Courses')
const {multipleMongooseToObject} = require('../../until/mongoose')

class meController {
        // [GET] / news
        storedCourses(req, res, next) {
                Course.find({})
                        .then(courses => 
                                  res.render('./me/stored-courses', { 
                                        courses: multipleMongooseToObject(courses) 
                                }))
                        .catch(next)
        }
}

module.exports = new meController;