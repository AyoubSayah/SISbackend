export {}
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const quizschema = new Schema({
    title : {
        type : String ,
        required: true
    },
    image : {
        type : String,
    },
},

{
    timestamps: true
})

module.exports=mongoose.model('Quiz',quizschema);