const express = require("express");
const router = express.Router();
//Require Firebase

const firebase = require("firebase");
const db = firebase.firestore();

//Reference a specific collection
const user = [];
const users = db.collection("users")
router.get("/",(req,res) =>{
    users
    .get()
    .then((querySnapshot)=>{
        console.log("querySnapshot",querySnapshot);
        querySnapshot.forEach(doc => {
            user.push(doc.data())
        });
        console.log(querySnapshot);
        return res.send(user);
    }).catch(function(e) {
        console.warn("error:",e);
        return res.send(error);
    });

});

module.exports = router;