const Course = require('../models/Courses')
const {multipleMongooseToObject} = require('../../until/mongoose')
class SiteController {
        // [GET] Page Search
        index(req, res) {

                Course.find({})
                        .then(courses => res.render('home', {
                                courses: multipleMongooseToObject(courses)
                        }))
                        .catch(err => {
                                console.log('error' + err.message);
                        });
        }

        // [GET] Page Home
        search(req, res) {
                res.render('search');
        }
}

module.exports = new SiteController;