const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    number: {
        type: Number
    },
    photo: {
        type: String
    },
    role: {
        type: String,
        enum: ['user', 'designer','admin'],
        default: 'user'
    },
    workExperience: {
        type: Number
    },
    aboutMe: {
        type: String
    },
    monthlyInteraction: {
        type: Number
    },
    projectCompleted: {
        type: Number
    },
    skills: {
        type: String
    },
    art: {
        type: String
    },
    designs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'designs'
        }],
});

const UserDB = mongoose.model('User', Schema);

module.exports = UserDB;
