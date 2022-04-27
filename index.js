const express = require("express");

const app = express();
const PORT = 3001;


const postRoute = require("./Routes/post");

app.use("/post", postRoute);

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

app.listen(PORT, () => console.log(`Server Running at ${PORT}`));
