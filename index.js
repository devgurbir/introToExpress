const { urlencoded } = require("express");
const express = require("express")
const users = require("./user")

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome to homepage")
})

app.get("/users" , (req, res) => {
    res.send(users)
})

app.get("/users/:id", (req, res) => {
    const user = users.find(el => el.id === Number(req.params.id))
    res.send(user)
})

app.listen(4000, () => {
    console.log("Listening to port 4000")
})