const express = require("express");
const expressHbs = require("express-handlebars");
const bodyParser = require("body-parser")
const hbs = require("hbs");
const app = express();
const homeRouter = require("./routes/homeRouter");

app.engine("hbs", expressHbs(
    {
        layoutsDir : "views/layouts",
        defaultLayout: "index",
        extname: "hbs"
    }
));
app.use(express.static(`${__dirname}/public/css`));
app.use(express.static(`${__dirname}/public/img`));
app.use(express.static(`${__dirname}/public/js`));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", homeRouter);
app.use((req, res)=>{
    console.log(req.method)
});
app.listen(3000);