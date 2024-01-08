import mongoose from "mongoose";

const PERSON = new mongoose.model(
  "person",
  mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 30
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    whishlist: {
        type: Array,
        default: []
    },
  }, { timestamps: true })
);

export default PERSON;
