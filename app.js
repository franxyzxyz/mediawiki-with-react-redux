var express = require('express'),
    app     = express();

app.use(express.static('src/build'));

app.listen(3000, function(){
  console.log("server is running at port " + 3000)
});