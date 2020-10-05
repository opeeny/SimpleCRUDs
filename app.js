const express = require("express");
const app = express();
const bodyPaser = require("body-parser");
const MongoClient = require("mongodb").MongoClient
const port = "3000";

const uri = "mongodb+srv://admin:admin@cluster0.clsfs.mongodb.net/fine_quotes?retryWrites=true&w=majority";

//use Body-parse
app.use(bodyPaser.urlencoded({ extended: true }));


//DB
MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(client => {
    const collection = client.db("fine_quotes").collection("quotes");
    console.log("Connected to the Database");
    client.close;

    //GET handler, create a server that browsers can listen to
app.get("/", (req, res) => {
    //res.send(__dirname + '/index.html');
    res.sendFile(__dirname + '/index.html');
    /*collection('quotes').find().toArray()
        .then(results => {
            console.log(results);
            console.log('Check on the OUTPUT', results);
        }).catch(error => console.log(error));
    */
 });
 
    //POST handler
app.post("/quotes", (req, res) => {
    //console.log(req.body); 
    const collection = client.db("fine_quotes").collection("quotes");
    collection.insertOne(req.body)
        .then(result => {
            console.log(req.body);
            res.redirect('/');
            //console.log("success in results",result);
        }).catch(error => console.log(error));
});
})
.catch(error => console.log(err))
        
//PORT
app.listen(port, () => {
    console.log(__dirname);
    console.log(`The browser is now listening to the server at ${port}`);
});