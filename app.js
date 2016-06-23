var express = require('express'),
    app     = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('src/build'));

app.listen(3000, function(){
  console.log("server is running at port " + 3000)
});