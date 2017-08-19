// const MongoClient = require('mongodb').MongoClient;
// ES6 - object destructuring - pull properties of object and set them to variables
const {MongoClient, ObjectID} = require('mongodb'); // pulling off MongoClient & ObjectID properties of mongodb module

// var obj = new ObjectID();
// console.log(obj);

// Easy Example of object destructuring
var user = {name: 'Vinse', age: 36};
var {name} = user; // pulls off name property of user object setting it to the 'name' variable
console.log(name);

// Can just use any name for the database and it will create it automatically
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {  // takes 2 arguments, can be heroku/aws hosting url or localhost, etc, db oject is used to read/write data
 if (err) {
     return console.log('Unable to connect to MongoDB server.'); // the return here prevents the next console.log (the successful connection) from running. If it's NOT there, the successful connection msg will run after the err msg is run. OR can put an else clause on the success msg, either way
 }
 console.log('Connected to MongoDB server.');

//  db.collection('Todos').insertOne({
//     text: 'Something to do',
//     completed: false
//  }, (err, result) => {
//     if (err) {
//         return console.log('Unable to insert todo', err);
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2)); // .ops attribute is everything that was inserted
//  });

// Insert new doc into Users (name: 'Vinse', age: 36, location):

// db.collection('Users').insertOne({
//     // _id: 123,
//     name: 'Vinse',
//     age: 36,
//     location: 'San Diego'
// }, (err, result) => {
//     if (err) {
//         return console.log('Unable to connect to insert user', err);
//     }
//     console.log(result.ops[0]._id.getTimestamp()); // OR console.log(JSON.stringify(result.ops, undefined, 2)); to pretty print and stringify
// });
 // _id object - helps with scale - Mongo can kick up new database servers to handle high traffic
 // can also manually give an _id in your object
 db.close(); // closes connection with db server
});