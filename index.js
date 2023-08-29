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
var userAuth = false;
app.use(bodyParser.urlencoded({ extended: true }));

function passCheck(req, res, next) {            //This is a custom middleware to check password
  const pass = req.body.password;
  if (pass === "guri") {
    userAuth = true;
  }
  next();
  console.log(pass);
}

app.use(passCheck);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/check", (req, res) => {
  if (userAuth === true) {
    res.sendFile(__dirnaame + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});
app.listen(port, () => {
  console.log(`The port is at port ${port}`);
});

//   res.sendFile(__dirname + "/public/secret.html");

// else{
//   res.sendFile(__dirname + "/public/index.html");
// }
