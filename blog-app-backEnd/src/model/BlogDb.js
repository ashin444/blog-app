const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ash444:userone@ictakfiles.hmjqy.mongodb.net/BLOG APP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var blogSchema = new Schema({
    name: String,
    title: String,
    description:Array
});

var BlogInfo = mongoose.model('blogs',blogSchema);

module.exports = BlogInfo;