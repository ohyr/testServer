const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./route/router');
const bodyParser = require('body-parser');
const os = require('os');
const interfaces = os.networkInterfaces();

const mongoose = require('mongoose');

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/howl', {useUnifiedTopology: true, useNewUrlParser: true})
//deprecationwarning 해결 useUnifiedTopology, useNewUrlParser 추가
//mongod

var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]){
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal){
            addresses.push(address.address);
        }
    }
}
console.log("현재 서버주소 : " + addresses + ":" + port);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
// false : String Object
// true : any Type

app.use(router)

app.listen(port, err =>{
    if(err) console.log(err)
    else console.log("Server On 3000")
})