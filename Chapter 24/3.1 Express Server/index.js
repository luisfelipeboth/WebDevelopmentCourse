import express from "express"
const app = express();
const serverPort = 3000;

app.listen(3000, () => {
    console.log("Server runing on port "+ serverPort + ".");
});