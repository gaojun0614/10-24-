var express = require('express');
var router = express.Router();
var fs = require('fs');
var one = 0;
var two = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
	one++;
	fs.readFile('public/index.txt','utf-8',function(err,data){
		if(err){
			console.log(err);
		}
		else{
			console.log(data);
			fs.writeFile('public/index.txt','index页面的访问次数是:'+one,function(err){
				if(err){
					console.log(err);
				}
			})
			res.render('index',{ title:one });
		}
	})
});


router.get('/gj', function(req, res, next) {
	two++;
	fs.readFile('public/gj.txt','utf-8',function(err,data){
		if(err){
			console.log(err);
		}
		else{
			console.log(data);
			fs.writeFile('public/gj/txt','gj页面的访问次数是:'+two,function(err){
				if(err){
					console.log(err);
				}
			})
			res.render('gj', { title: two });
		}
	})
});

module.exports = router;
