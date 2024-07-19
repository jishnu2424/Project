const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    userId:{
        type: String,
        ref: 'users',
        required: true
    },
    desgnerId: {
        type: String,
        required: true
    }
});

const hireDB = mongoose.model('hire', schema);
module.exports = hireDB;
