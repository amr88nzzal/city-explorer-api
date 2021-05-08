const express = require('express');
const app = express();
require('dotenv').config();
const cors =require('cors');
app.use(cors());
const weather = require('./Data/weather.json')
const port = process.env.REACT_APP_PORT||8081;

app.get('/', function (req, res) {
  res.send("hello")
})
app.get('/weather', function (req, res) {
const dataArr = weather.data.map(data => new Weather(data));
  res.send(dataArr)
})
 class Weather {
   constructor (data){
     this.description = data.weather.description;
     this.date =data.valid_date;
   }
 }
app.listen(port)
