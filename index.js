const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const mongoURL =
    "mongodb+srv://admin:ZMVW9arZu4uWRTq7@cluster0.mtfk7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const PORT = 3001;

mongoose.connect(
    mongoURL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) {
            console.log('Connected to DataBase "Posts" ');
        } else {
            console.log(err);
        }
    }
);

const serverRoute = require("./routes/serverRoute");

app.use("/", serverRoute);

app.listen(PORT, () => console.log(`Server Running at ${PORT}`));
