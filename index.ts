import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.sendFile('/public/index.html', { root: __dirname });
});

app.get("/hi", (req, res) => {

    res.send("HI!");
});

app.listen(PORT, () => {
    console.log("Server started on port 3000");
});