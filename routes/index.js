const express = require("express");

const router = express.Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Howdy!",
        user: "Brown",
        added: new Date()
    },
    {
        text: "Hola!",
        user: "Milly",
        added: new Date()
    }
];

/* GET home page. */
router.get("/", (req, res, next) => {
    res.render("index", { title: "Mini Messageboard", messages });
});

/* GET new message */
router.get("/new", (req, res, next) => {
    res.render("form", { title: "new message" });
});

/* POST new message */
router.post("/new", (req, res, next) => {
    const { name, msg } = req.body;
    messages.push({ text: msg, user: name, added: new Date() });
    res.redirect("/");
});

module.exports = router;
