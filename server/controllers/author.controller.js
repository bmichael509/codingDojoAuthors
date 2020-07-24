// Contains the functions that will be executed when the corresponding route URL is visited

const Author = require("../models/author.model");
module.exports = {
    create(req, res) {
        Author.create(req.body)
            .then((author) => {
                res.json(author);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    getAll(req, res) {
        Author.find()
            .then((authors) => {
                res.json(authors);
            })
            .catch((err) => {
                res.json(err);
            })
    },
    getOne(req, res) {
        // Author.find({_id: req.params.id}) // if you are not going to use findById
        Author.findById(req.params.id)
            .then((Author) => {
                res.json(Author);
            })
            .catch((err) => {
                res.json(err);
            })
    },
    delete(req, res) {
        Author.findByIdAndDelete(req.params.id)
            .then((Author) => {
                res.json(Author);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    delete2(req, res) {
        Author.deleteOne({ _id: req.params.id })
            .then((Author) => {
                res.json(Author);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    // This one gives you the removed Author.
    delete3(req, res) {
        Author.findById(req.params.id)
            .then((Author) => {
                Author
                    .remove()
                    .then((removedAuthor) => {
                        res.json(removedAuthor);
                    })
                    .catch((err) => {
                        res.json(err);
                    })
            })
            .catch((err) => {
                res.json(err);
            });
    },

    update(req, res) {
        Author.findByIdAndUpdate(req.params.id, req.body, {
            // This will run the validators on the new values othersize they would not be run.
            runValidators: true,
            new: true,
        })
            .then((Author) => {
                res.json(Author);
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    },
    update2(req, res) {
        Author.findById(req.params.id)
            .then((Author) => {
                Author
                    .update(req.body, { runValidators: true })
                    .then((status) => {
                        res.json(status);
                    })
                    .catch((err) => {
                        res.json(err);
                    });
            })
            .catch((err) => {
                res.json(err);
            });
    },
};
