//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
     
    const db = client.db('TodoApp')

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5bbb9ba15b065d93a83b7f17')
    // }, {
    //     $set: {
    //       completed: true     
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

        db.collection('Users').findOneAndUpdate({
         _id: new ObjectID('5bbb7a27c0d79e7488d7fc1f')
     }, {
         $set: {
           name: 'Andrew',         
         },
         $inc: {
             age: 1
         }
     }, {
         returnOriginal: false
     }).then((result) => {
         console.log(result);
     });


    //db.close();
});