
const {MongoClient, ObjectID} = require('mongodb'); // pulling off MongoClient & ObjectID properties of mongodb module

// Can just use any name for the database and it will create it automatically
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {  // takes 2 arguments, can be heroku/aws hosting url or localhost, etc, db oject is used to read/write data in next steps
 if (err) {
     return console.log('Unable to connect to MongoDB server.'); // the return here prevents the next console.log (the successful connection) from running. If it's NOT there, the successful connection msg will run after the err msg is run. OR can put an else clause on the success msg, either way
 }
 console.log('Connected to MongoDB server.');

 // .find returns a cursor that creates a pointer to all documents, can then use the cursor methods (like toArray, which returns a promise, so can add a .then call)
//  db.collection('Todos').find().count().then((count) => {
//     console.log(`Todos count: ${count}`);
//  }, (err) => {
//      console.log('Unable to fetch todos', err)
//  });

db.collection('Users').find({name: "Vinse"}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
    console.log('Unable to fetch users', err);
})

//  db.close(); // closes connection with db server
});