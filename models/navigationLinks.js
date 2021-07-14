const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NavigationLinksSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    key: {
        type: String,
        required: true,
        unique: true
    },
    is_nav: {
        type: Boolean,
        default: false
    }
})

const NavigationLink = mongoose.model('navigationLink', NavigationLinksSchema)

module.exports = NavigationLink;