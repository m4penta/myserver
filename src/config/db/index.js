const mongoose = require('mongoose');


async function connect(){
try {
    await mongoose.connect('mongodb://localhost:27017/my_server'),{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    console.log('Connect succesfull')
} catch (error) {
    console.log('fail')
}
    

}
module.exports = {connect};