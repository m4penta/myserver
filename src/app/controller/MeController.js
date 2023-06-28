const { json } = require('express');
const { mutilObjMongoose } = require('../../util/mongoose');
const Course = require('../model/Course');


class MeController {
    
     
     // Get me/stored/courses
     storedCourses(req,res,next){
        Course.find({})
        .then(courses => res.render('me/stored-courses',{
            courses: mutilObjMongoose(courses)
        }))
        .catch(next)
        
    }
}

module.exports = new MeController;