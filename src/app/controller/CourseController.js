const { mutilObjMongoose } = require('../../util/mongoose');
const Course = require('../model/Course');


class CourseController {
    //[GET] /courses/:slug
    show(req,res){
        res.send('COURSE DETAIL -' + req.params.slug)
    }
}

module.exports = new CourseController;