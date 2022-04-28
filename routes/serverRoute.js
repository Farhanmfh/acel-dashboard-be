const router = require("express").Router();
let Server = require("../model/serverInfo");

router.route("/").get((req, res) => {
    Server.find()
        .then((response) => res.json(response))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const region = req.body.region;
    const date = req.body.date;

    const newServer = new Server({
        name,
        price,
        region,
        date,
    });

    newServer
        .save()
        .then(() => res.json("Server Added"))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
