const express = require("express");
const bodyParser = require("body-parser");
const hex2ascii = require("hex2ascii");
const https = require("https");
const app = express();
const port = 3000;
var CityName;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body);
  // res.send(req.body.cityName);
  CityName = req.body.cityName;
  const URL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    CityName +
    "&appid=559340dd86fcb83340111729e6240a0e";
  var weatherData;
  https.get(URL, function (response) {
    console.log("statusCode:", response.statusCode);
    //   console.log('headers:', response.headers);

    response.on("data", function (data) {
      weatherData = JSON.parse(data);
      console.log(weatherData);
      res.send(weatherData);
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at 3000`);
});
