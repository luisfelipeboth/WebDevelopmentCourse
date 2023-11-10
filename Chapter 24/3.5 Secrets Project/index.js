//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var correct = false;

app.use(bodyParser.urlencoded({ extended: true}));

app.use(checkPassword);

app.post("/check", (req, res) => {
    if (correct) {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else {
        res.sendFile(__dirname + "/public/index.html");
        //res.redirect("/");     // Do the same as the previous line of code
    }
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

function checkPassword(req, res, next) {
    console.log(req.body);
    if (req.body["password"] === "ILoveProgramming") {
        correct = true;
    } else {
        correct = false;
    }
    console.log("Correct password?: " + correct);
    next();
};