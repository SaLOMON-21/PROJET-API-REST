const mongoose = require('mongoose');
const User = new mongoose.model('User',
{
    fname: String,
    lname: String,
    age: Number,
    favoriFood: [{
        breakfast: String,
        dinner: string
    }]
})
const manyPerson = new User({

});

// ici est la sauvegarde.
manyPerson.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    })
    module.export = User;