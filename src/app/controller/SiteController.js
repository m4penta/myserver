class SiteController {
    
    //Get /
    index(req,res){
        res.render('home');
    }
     // Get /search
    show(req,res){
        res.render('search')
    }
}

module.exports = new SiteController;