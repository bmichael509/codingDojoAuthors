const mongoose = require("mongoose");

// {PATH} will insert the name of the key / prop

const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
        },
    },
    { timestamps: true }
);

//Creates the cities (auto pluralizes the name) collection and enforces the CitySchema on any new documents that are added to the collection
const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;