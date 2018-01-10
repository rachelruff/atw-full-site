// import axios from "axios";

// const getAllProducts = function() {};

// modules.export to get access to data on server

// module.exports = { getAllProducts };

const getCamera = function(req, res, next) {
  const db = req.app.get("db");

  db
    .cameraProducts()
    .then(response => console.log(response))
    .catch(console.log);
};

module.exports = { getCamera };

//function that makes a call from front end and get it to log in the console (componentdidmount)
