const express = require("express");
const router = express.Router();
const NavigationLink = require("../models/navigationLinks");

router.get("/navlinks", (req, res, next) => {
    NavigationLink.find()
        .then(data => res.json(data))
        .catch(next)
})
router.post("/navlinks", (req, res, next) => {
        NavigationLink.create(req.body)
            .then(data => res.json(data))
            .catch(next)
    })
router.delete("/navlinks/:key", (req, res, next) => {
    NavigationLink.findOneAndDelete({"key": req.params.key})
        .then(data => res.json(data))
        .catch(next)
})

module.exports = router;