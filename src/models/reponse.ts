export {}
const mongoose = require('mongoose');
let enumeration: Boolean[] = [];
const Schema = mongoose.Schema;

const Response = new Schema({
    content : {
        type : String ,
        required: true
    },
    questionId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'question', 
       },
       isCorrect:{
type:enumeration,
required:true
       }
},

{
    timestamps: true
})

module.exports=mongoose.model('response',Response);