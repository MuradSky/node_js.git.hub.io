const request = require("request");
const User = require("../models/data");
const id = require("../models/id.json")
let city = "Istanbul"
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=6d207cef42d10d1dc4b4d4890ae4d38d`;
exports.home = (req, res) => {

    request(url, (err, resp, body)=>{
        weather_json = JSON.parse(body);
       let weather = {
           city: city,
           temp : Math.round(weather_json.main.temp),
           description: weather_json.weather[0].description,
           icon : weather_json.weather[0].icon
       };
       res.render("home.hbs", {
            title: "Home",
            script: "/main.js",
            emailsHome: true,
            style: "/home.css",
            weather : weather,
        }) 
    })
    
};

exports.users = (req, res) => {
    res.render("users.hbs",{
        title: "Users",
        style: "/users.css",
        users : User.getAll(),
    })
};

exports.add = (req, res) => {
    res.render("add.hbs",{
        title : "Add User",
        style : "/add.css",
    })
};

exports.postUser = (req, res)=>{
    const firstname = req.body.firstName;
    const lastname = req.body.lastName;
    const age = req.body.age;
    const email = req.body.email;

    const user = new User(firstname, lastname, age, email);
    user.save();
    res.redirect("/users")
};
exports.id = (req, res)=>{
    res.send(id)
}