const mongoose = require('mongoose');


// Creates a model to our database
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


// Register a model to our app
mongoose.model('Product', ProductSchema);