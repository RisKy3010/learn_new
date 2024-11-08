//  http://localhost:3000/ride1?age=14

const express = require('express')
const app = express()

function isOldEnoughMiddleware(req,res,next){
 const age = req.query.age;
 if(age>=14){
    next();
 }else{
    res.json({
        msg:"sorry you are not of age yet"
    });
 }
}

app.get('/ride1', isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "you have successfully riden ride 1",
  });
});

app.get('/ride2', isOldEnoughMiddleware, function (req, res) {
    res.json({
      msg: "you have successfully riden ride 2",
    });
});

app.listen(3000)