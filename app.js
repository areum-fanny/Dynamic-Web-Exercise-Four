const express = require("express");

const app = express();

const port = process.env.P0RT || 4000;
var firebaseConfig = {
  apiKey: "AIzaSyAf44vrCV1jt-gDSLJlcKjUyvMeLU6K48g",
  authDomain: "themaze-wiki.firebaseapp.com",
  databaseURL: "https://themaze-wiki.firebaseio.com",
  projectId: "themaze-wiki",
  storageBucket: "themaze-wiki.appspot.com",
  messagingSenderId: "465822887237",
  appId: "1:465822887237:web:3d0fce0782498fcd93222c",
  measurementId: "G-NHP059RLN6"
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