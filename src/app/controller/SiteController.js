const { mutilObjMongoose } = require('../../util/mongoose');
const Course = require('../model/Course');


class SiteController {
    
     index(req, res, next) {
       Course.find({})
      .then(courses =>  {
       
        res.render('home', {
          courses : mutilObjMongoose (courses)
        });
      })
      .catch(next)
      
      }

      
    //Get /
    //index(req,res){
        
        // res.render('home');
    //}
     // Get /search
    show(req,res){
        res.render('search')
    }
}

module.exports = new SiteController;