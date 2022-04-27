const mongoose = require("mongoose");

const newServer = new mongoose.Schema(
    {
        name: String,
        price: Number,
        region: String,
        date: {
            type: Date,
        },
    },
    { timestamps: true }
);

const Server = mongoose.model("Server", newServer);

module.exports = Server;
