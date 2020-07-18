var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");


app.get("/results",function(req,res){
	var movieTitle = req.query.movieTitle;
	//console.log(movieTitle);
	var query = "http://www.omdbapi.com/?apikey=961dc340&s=%27"+movieTitle+"%27";
	request(query,function(error,response,body){
		if(!error&&response.statusCode==200){
			var parsedBody =JSON.parse(body);
			res.render("results", { data:parsedBody });
		}
	
	});
});

app.get("/",function(req,res){
	res.render("search");
});

/*request("http://www.google.com",function(error,response,body){
	if(!error){
	console.log("request executed");
	}
});*/

app.listen("3000",function(){
	console.log("Server Running");
})