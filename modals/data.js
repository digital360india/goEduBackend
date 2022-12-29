const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    any: {}
    // sch: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User',
    // },
    // text: {
    //     type: String,
    //     required: [true, 'Please add a text value'],
    // },
}, {
    timestamps: true,
    strict: false
})

module.exports = (collection) => mongoose.model(collection, goalSchema);