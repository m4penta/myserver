const { mongooseToObj } = require("../../util/mongoose");
const Course = require("../model/Course");

class CourseController {
  //[GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("courses/show", {
          course: mongooseToObj(course),
        })
      )
      .catch(next);
  }

  //[GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }
  //[post] /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(formData);
    course.save()    
    .then(() => res.redirect('/'))
    .catch(error =>{})
  }
  //[GET] /courses/:id/edit
  edit(req, res, next) {
    console.log(req.params.id)
    Course.findById(req.params.id)
    .then((course) => res.render("courses/edit", {
      course: mongooseToObj(course)
    }))
    .catch(next)
    
  }
  //[put] /courses/:id
  update(req, res, next) {
    res.json(req.body);
  }
}

module.exports = new CourseController();
