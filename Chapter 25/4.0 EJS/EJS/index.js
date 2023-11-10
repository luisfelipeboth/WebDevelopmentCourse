import express from "express";

const app = express();
const port = 3000;
const d = new Date();
let day = d.getDay();
var weekDay = "";
var phrase = ""; 

if (day === 0 || day === 6) {
    weekDay = "the weekend";
    phrase = "have fun";
} else {
    weekDay = "a weekday";
    phrase = "work hard";
}

app.get("/", (req, res) => {
    res.render("index.ejs", {
        weekday: weekDay,
        phrase: phrase
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});