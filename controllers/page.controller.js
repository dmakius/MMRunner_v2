import loggedIn from "../middleware/loggedIn.js";
import HighScore from './../models/HighScore.js';
import Sort from './../helpers/sort.js';

export default class PageController{
    static async getMegaManPage(req, res){
        var mobile = req.useragent.isMobile;
        var x = loggedIn(req, res);
        res.render('MegaManRunner',{loggedIn: x, mobile});
    }
    static async getAsteroidsPage(req, res){
        var mobile = req.useragent.isMobile;
        var x = loggedIn(req, res);
        res.render('Asteroids',{loggedIn: x, mobile});
    }
    static async getMarioPage(req, res){
        var mobile = req.useragent.isMobile;
        var x = loggedIn(req, res);
        res.render('VerticalMario',{loggedIn: x, mobile});
    }
    static async getLoginPage(req, res){
        var mobile = req.useragent.isMobile;
        var x = loggedIn(req, res);
        res.render('login', {loggedIn: x, mobile});
    }

    static async getAdminPage(req, res ){
        var mobile = req.useragent.isMobile;
        var x = loggedIn(req, res);
        console.log("getting scores");
        HighScore.find({}).then((scores) => {
            console.log(scores); 
            var sortedScores =  Sort(scores);
            res.render('admin',{loggedIn: x, mobile, sortedScores});
        })

        
    }
    static async getRegistrationPage(req, res){
        var mobile = req.useragent.isMobile;
        var x = loggedIn(req, res);
        res.render('register',  {loggedIn: x, mobile});
    }
}