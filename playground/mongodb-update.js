
const {MongoClient, ObjectID} = require('mongodb'); // pulling off MongoClient & ObjectID properties of mongodb module

// Can just use any name for the database and it will create it automatically
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {  // takes 2 arguments, can be heroku/aws hosting url or localhost, etc, db oject is used to read/write data in next steps
    if (err) {
        return console.log('Unable to connect to MongoDB server.'); // the return here prevents the next console.log (the successful connection) from running. If it's NOT there, the successful connection msg will run after the err msg is run. OR can put an else clause on the success msg, either way
    }
    console.log('Connected to MongoDB server.');
 
   // findOneAndUpdate - updates and gives you back the document you updated
   // findOneAndUpdate(filter, update, options, callback)

//    db.collection('Todos').findOneAndUpdate({
//        _id: new ObjectID('5997c35b69635300db2710b4')
//    }, {
//        $set: {
//            completed: true
//        }
//    }, {
//        returnOriginal: false
//    }).then((result) => {
//        console.log(result);
//    });

   db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5993dfb46a80450391665612')
}, {
    $set: {
        name: 'Joey'
    },
    $inc: {
        age: 1
    }
}, {
    returnOriginal: false
}).then((result) => {
    console.log(result);
});

    //  db.close(); // closes connection with db server
});