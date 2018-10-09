const {ObjectID} = require ('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5bbcc82d17d7af1819431b7b';

// if (!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//    console.log('Todos', todos); 
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//    console.log('Todo', todo); 
// });

// Todo.findById(id).then((todo) => {

//     if (!todo) {
//         return console.log('Id not found');
//     }  
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById('5bbb78c36bde9f3a28b0963d').then(() => {
    if(!user) {
        return console.log('Unable to find user');
    }
   console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
   console.log(e);
});
