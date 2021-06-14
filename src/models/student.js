const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    IdNumber: Number,
    Name: String,
    ScndName: String,
    Grade1:Number,
    Grade2: Number,
    Grade3: Number,
    Total: Number,
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('students',StudentSchema);