const express = require("express");

const app = express();

const port = process.env.PORT || 3000;
var firebaseConfig = {
  apiKey: "AIzaSyCmeBcqzdkLpVkI3UX8cDp0vxjNstvNVek",
  authDomain: "exercise-4-8d6f0.firebaseapp.com",
  databaseURL: "https://exercise-4-8d6f0.firebaseio.com",
  projectId: "exercise-4-8d6f0",
  storageBucket: "exercise-4-8d6f0.appspot.com",
  messagingSenderId: "878998105788",
  appId: "1:878998105788:web:ae0a4dadf8fb542c2c6ab9"
};
const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);
const indexRoute = require("./routes/index.js");
const postRoute = require("./routes/post.js");
const createRoute = require("./routes/create.js");
app.use('/',indexRoute);
app.use('/post',postRoute);
app.use('/create',createRoute);
app.listen(port,() =>
    console.log(`Exercise four is running in localhost:${port}`)
);