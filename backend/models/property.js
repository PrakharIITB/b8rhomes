import mongoose from "mongoose";

const PROPERTY = new mongoose.model(
    'property',
    mongoose.Schema({
        description: {
            type: String,
            required: true,
            min: 2,
            max: 1000
        },
        price: {
            type: Number,
            required: true,
            min: 1,
        },
        location: {
            type: String,
            required: true,
            min: 2,
            max: 100
        },
        owner: {
            type: String,
            required: true,
            min: 2,
            max: 30
        },
        whishlist: {
            type: Array,
            default: []
        },
        rating: {
            type: Number,
            default: 0
        },
    }, { timestamps: true
    })
);

export default PROPERTY;