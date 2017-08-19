
const {MongoClient, ObjectID} = require('mongodb'); // pulling off MongoClient & ObjectID properties of mongodb module

// Can just use any name for the database and it will create it automatically
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {  // takes 2 arguments, can be heroku/aws hosting url or localhost, etc, db oject is used to read/write data in next steps
    if (err) {
        return console.log('Unable to connect to MongoDB server.'); // the return here prevents the next console.log (the successful connection) from running. If it's NOT there, the successful connection msg will run after the err msg is run. OR can put an else clause on the success msg, either way
    }
    console.log('Connected to MongoDB server.');
 
    // deleteMany - deletes all instances when found
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result); // in result object, n is the number of documents that were deleted
    // }); 
    
    //deleteOne - deletes first instance when found
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete - finds first instance, deletes it, shows what you deleted and can undo it as well
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })

    // Challenge: deleteMany and findOneAndDelete

    // db.collection('Users').deleteMany({name: 'Vinse'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5993e06c4177240396504b2b"
    )}).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    })

    //  db.close(); // closes connection with db server
});