const express = require("express");

const router = express.Router();
const firebase = require("firebase");
const db = firebase.firestore();

//Reference a specific collection
const user = [];
const things = db.collection("users");
router.get("/", (req,res) => res.send("No ID Provided"));
router.get("/:id",(req,res) =>{
    const queryId = req.params.id;
    things
    .doc(queryId)
    .get()
    .then(function (doc){
        if(doc.exists) {
            return res.send(doc.data());
        }
        else {
            return res.send("No data found");
        }
    }).catch(function(e) {
        console.warn("error:",e);
        return res.send(error);
    });
});
module.exports = router;