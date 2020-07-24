const authorControler = require("../controllers/author.controller")

module.exports = (app) => {
    app.post("/api/authors", authorControler.create);
    app.get("/api/authors", authorControler.getAll);
    app.get("/api/authors/:id", authorControler.getOne);
    app.put("/api/authors/:id", authorControler.update)
    app.delete("/api/authors/:id", authorControler.delete);
}