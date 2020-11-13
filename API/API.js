
let express = require('express');
let app = express();
let port = 3000;
let pagesize=5;
////////////////////////////////////////////////////////
 let students= [];
let contant1='infromation.json';
let fs = require('fs');
fs.readFile(contant1, 'utf-8', (err, data) => {
    if (err) {
        console.log(err.message);
    } else {
        students =JSON.parse(data);
    }
})
///////////////////////////////////////////////
let subject= [];
let contant2='infromationSubject.json';
// let fs = require('fs');
fs.readFile(contant2, 'utf-8', (err, data) => {
    if (err) {
        console.log(err.message);
    } else {
        subject =JSON.parse(data);
    }
})
//////////////////////////////////////////////
app.get("/students", (req, res) =>{
    // let page1=req.query.page;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
//   start=(page1-1)*pagesize;
//   end=start+ pagesize;
  res.send(students);
  });
  app.get("/subject/:id/:number_part", (req, res) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    let id1=req.params.id;
    let number_part1=req.params.number_part;
    let r=subject.find(x =>( x.id== id1 &&  x.number_part==number_part1));
    console.log(id1);
    console.log(number_part1);
    console.log(r);
  
 
  res.send(r);
  });
  app.listen(3000);