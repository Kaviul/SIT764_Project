var express = require("express")
var app = express()

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var port = process.env.port || 8080;

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/homepage.html');
})

app.get('/services', (req, res) => {
    res.sendFile(__dirname+'/services.html');
})

app.get('/testimonials', (req, res) => {
    res.sendFile(__dirname+'/testimonials.html');
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname+'/about.html');
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname+'/contact.html');
})

app.post('/contact', (req, res) => {
    res.send("Thank you for getting in touch!");
})

app.listen(port,()=>{
    console.log("App listening to: " + port)
})