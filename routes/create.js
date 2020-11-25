
const express = require("express");

const router = express.Router();
const firebase = require("firebase");
const db = firebase.firestore();

//Reference a specific collection
const users = db.collection("users");

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
router.get("/",(req,res) =>res.send(form));
router.get("/submit", (req,res) =>{
    const queryParams = req.query;
    const username = queryParams.username;
    const firstname = queryParams.firstname;
    const lastname = queryParams.lastname;
    const email = queryParams.email;
    const password = queryParams.password;
    users
    .doc(username)
    .set(queryParams)
    .then(function(doc){
        res.send({
            "fname":{firstname},
            "lname":{lastname},
            "email":{email},
            "username":{username},
            "password":{password}
        });
    }).catch(function(error){
        console.log('error',error);
        res.send("Failed Submission");
    });
});
module.exports = router;