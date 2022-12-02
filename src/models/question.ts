export {}
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionschema = new Schema({
    content : {
        type : String ,
        required: true
    },
    order : {
        type : Number,
    },
    quizId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',
        }
},

{
    timestamps: true
})

module.exports=mongoose.model('question',questionschema);