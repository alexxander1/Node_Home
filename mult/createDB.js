var mongoose = require('mongoose');
var uri = "mongodb+srv://Admin:Alex79787278620@cluster0-pcauv.mongodb.net/test?retryWrites=true";
uri = uri.replace("test","work2");
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex :  true});





var async = require('async')
var Hackers = require('./models/Hackers').Hackers;
function open(callback){
  mongoose.connection.on('open', callback)
}

function dropDB(callback){
  var db = mongoose.connection.db
  db.dropDatabase(callback)}

function insertHackers(callback){
    async.parallel([
      function(callback){
        var Alexxander1 = new Hackers({
          nick: "Alexxander1"
        })
        Alexxander1.save(function(err,Alexxander1){
          callback(err, "Alexxander1")
        })
      },
      function(callback){
        var Ximik01 = new Hackers({
          nick: "Ximik01"
        })
        Ximik01.save(function(err,Ximik01){
          callback(err,"Ximik01")
        })
      },
      function(callback){
        var Date1 = new Hackers({
          nick: "Date1"
        })
        Date1.save(function(err,Date1){
          callback(err,"Date1")
        })
      },
      function(callback){
        var Slon =new Hackers({
          nick: "Slon"
        })
        Slon.save(function(err,Slon){
          callback(err,"Slon")
        })
      }
    ],
    function(err,result){
      callback(err)
    })
  }
  function close(callback){
    mongoose.disconnect(callback)
  }

  async.series([
    open,
    dropDB,
    insertHackers,
    close
  ],
function(err,result){
  if(err) throw err
  console.log("OK!!!")
}
)
