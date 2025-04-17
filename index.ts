import type {  Request,Response } from "express";
import express from 'express'
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req:Request, res:Response) => {
    res.sendFile('/public/index.html', { root: __dirname });
});

app.get("/chat", (req:Request, res:Response) => {

    res.sendFile('/public/chat.html', { root: __dirname });

});
app.get("/login",(req:Request, res:Response) =>{
    res.sendFile('/public/login.html',{root:__dirname});
})
app.listen(PORT, () => {
    console.log("Server started on port 3000");
});