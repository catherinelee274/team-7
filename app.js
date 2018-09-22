var express     = require("express"),
	app 		= express(),
	mongoose	= require("mongoose")
	bodyParser	= require("body-parser"),
	router 		= express.Router();

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get("/", function(req, res){
   	res.render("home");
});

app.get("/login", function(req, res){
	res.render("login");
});

app.post("/login", function(req, res){
	res.send();
	//function to handle the username and password
	var username = req.body.username;
	var password = req.body.password;
	if (checkUser(username, password)){
		res.redirect("/user")
	} else {
		res.redirect("login");
	}
});

app.get("/register", function(req, res){
	res.render("register");
});

app.get("/user", function(req, res){
	//suppose to check if user name is logged in
	//should give user access to user webpage

	const user1 = {

		username: "bobbym1",
		password: "socks4ever",
		firstName: "Bobby",
		lastName: "Morgan",
		age: 20,
		married: "Y",
		children: 3,
		income: 40000,
		location: "Wilmington, DE",
		donations: 101,
		points: 1414,
		purchases: 20

	}

	const user2 = {

		username: "sallym1",
		password: "boots4ever",
		firstName: "Sally",
		lastName: "Morgan",
		age: 23,
		married: "N",
		children: 1,
		income: 90000,
		location: "San Francisco, CA",
		donations: 28,
		points: 364,
		purchases: 45

	}


res.send(user1.firstName);

	res.render("user");
});

app.get("/about_us", function(req, res){
	res.render("about_us");
});

app.get("/need", function(req, res){
	res.render("need");
});

// app.get("/api/user", function(req, res){
// 	console.log(res);
// 	//register user with id of x
// 	const user = {
//     "glossary": {
//         "title": "example glossary",
// 		"GlossDiv": {
//             "title": "S",
// 			"GlossList": {
//                 "GlossEntry": {
//                     "ID": "SGML",
// 					"SortAs": "SGML",
// 					"GlossTerm": "Standard Generalized Markup Language",
// 					"Acronym": "SGML",
// 					"Abbrev": "ISO 8879:1986",
// 					"GlossDef": {
//                         "para": "A meta-markup language, used to create markup languages such as DocBook.",
// 						"GlossSeeAlso": ["GML", "XML"]
//                     },
// 					"GlossSee": "markup"
//                 }
//             }
//         }
//     }
// };
// 	res.send(8);
// });

app.post("/updateuser", function(req, res){
	console.log(req);
	res.send("user");
});

app.listen(8080, function(){
	console.log("PORT = "+process.env.PORT);
	console.log("The server is running");
})
