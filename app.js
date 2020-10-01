const express = require("express");
const app = express();
const port = "3000"
console.log("Hellow, May Node be with you");

//create a server that browsers can listen to
app.get("/", (req, res) => {
   //res.send(__dirname + '/index.html');
   res.sendFile(__dirname + '/index.html');
//    console.log("Its a quick check");
});

app.listen(port, () => {
    console.log(__dirname);
    console.log(`The browser is now listening to the server at ${port}`);
});