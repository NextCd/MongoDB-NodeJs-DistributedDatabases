//const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommitSchema = new Schema({
    title: String,
    description: String,
    tiempo: Date
});

module.exports = mongoose.model('commit',CommitSchema);