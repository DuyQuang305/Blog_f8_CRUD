const Course = require('../models/Courses')
const {mongooseToObject} = require('../../until/mongoose')
const { json } = require('express')
class CourseController {
        // [GET] / courses/:slug
        show(req, res, next) {

                Course.findOne({ slug: req.params.slug })
                        .then(course => {
                                res.render('./course/show', {
                                        course: mongooseToObject(course)
                                })
                        })
                        .catch(next)
        }

        // [GET] / courses/create
        create(req, res, next) {
                res.render('./course/createCourse')
        }

        // [POST] / courses/store
        store(req, res, next) {
                const formData = req.body
                formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`
                const course = new Course(formData)
                course.save()
                        .then(() => res.redirect(`/courses/:${formData.name}`) )
                        .catch((err) => {

                        });
        }

             // [GET] / courses/:id/edit
             edit(req, res, next) {
                Course.findById(req.params.id)
                        .then(course => {
                                res.render('./course/editCourse', {course: mongooseToObject(course)})
                        })
                        .catch(next)
        }
        
        // [PUT] /courses/:id
                update(req,res,next) {
                        const formData = req.body
                        Course.updateOne({ _id: req.params.id }, formData)
                                .then(() => res.redirect(`/me/stored/courses/`) )
                                .catch(next) 
                }

        // [DELETE] /courses/:id
                delete(req,res,next) {
                        Course.deleteOne({ _id: req.params.id})
                                .then(() => res.redirect(`back`))
                                .catch(next);
                }
}

module.exports = new CourseController;