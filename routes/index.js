const express = require("express");
const router = express.Router();
//Require Firebase

const firebase = require("firebase");
const db = firebase.firestore();

//Reference a specific collection

const blogposts = db.collection("blogpost")
router.get("/",(req,res) =>{
    const blogpostcollection = [];
    blogposts
    .get()
    .then((querySnapshot)=>{
        console.log("querySnapshot",querySnapshot);
        querySnapshot.forEach(doc => {
            blogpostcollection.push(doc.data())
        });
        console.log(querySnapshot);
        return res.send(blogpostcollection);
    }).catch(function(e) {
        console.warn("error:",e);
        return res.send(error);
    });

});

module.exports = router;