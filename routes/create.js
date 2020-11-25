
const express = require("express");

const router = express.Router();
const firebase = require("firebase");
const db = firebase.firestore();

//Reference a specific collection
const users = db.collection("users");
const blogposts = db.collection("blogpost");
const form = `
    <form action="/create/submit">
        <input type="text" name="firstname" placeholder="First Name" />
        <input type="text" name="lastname" placeholder="Last Name" />
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="username" placeholder="Username" />
        <input type="text" name="password" placeholder="Password" />
        <input type="text" name="re-password" placeholder="Re-enter Password" />
        <button type="submit">Register</button>
    </form>
`;
const form2 = `
    <form action="/create/submit">
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="text" placeholder="Text" />
        <input type="text" name="author" placeholder="Author" />
        <button type="submit">Register</button>
    </form>
`;
router.get("/",(req,res) =>res.send(form2));
router.get("/submit", (req,res) =>{
    const queryParams = req.query;
    const Idfromtitle = queryParams.title.replace(/\s+/g,"-").toLowerCase();
    blogposts
    .doc(Idfromtitle)
    .set(queryParams)
    .then(function(doc){
        res.send("Successful Submission");
    }).catch(function(error){
        console.log('error',error);
        res.send("Failed Submission");
    });
});
module.exports = router;