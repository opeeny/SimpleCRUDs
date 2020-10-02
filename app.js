const express = require("express");
const app = express();
const bodyPaser = require("body-parser");
const MongoClient = require("mongodb").MongoClient
const port = "3000";

const uri = "mongodb+srv://admin:admin@cluster0.clsfs.mongodb.net/test?retryWrites=true&w=majority";

//DB
MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(client => {
    const collection = client.db("test").collection("devices");

    console.log("Connected to the Database");
    client.close;
    
})
.catch(error => console.log(err))
        

//use Body-parse
app.use(bodyPaser.urlencoded({ extended: true }));

//get handler, create a server that browsers can listen to
app.get("/", (req, res) => {
   //res.send(__dirname + '/index.html');
   res.sendFile(__dirname + '/index.html');
//    console.log("Its a quick check");
});
//Handle a post request
app.post("/quotes", (req, res) => {
    console.log(req.body);
});

//PORT
app.listen(port, () => {
    console.log(__dirname);
    console.log(`The browser is now listening to the server at ${port}`);
});