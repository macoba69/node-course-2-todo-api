const {ObjectID} = require ('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5bbe0f035b065d93a83b8198'}).then((todo) => {

// });

Todo.findByIdAndRemove('5bbe0f035b065d93a83b8198').then((todo) => {
    console.log(todo);
});