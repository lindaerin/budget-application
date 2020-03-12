var Login = require("../models/Login");
var Groceries = require("../models/Groceries");
var Pantry = require("../models/Pantry");

module.exports = function(app) {
  app.get("/api/login", function(req, res) {
    //retrieves a unique user
    Login.findOne({
      where: {
        u_name: req.query.u_name,
        u_pass: req.query.u_pass
      }
    }).then(result => {
      res.json(result);
    });
  });

  app.post("/api/register", function(req, res) {
    //registers user
    Login.create({
      u_name: req.body.u_name,
      u_pass: req.body.u_pass
    }).then(() => {
      console.log("Success");
      res.end();
    });
  });

  app.post("/api/add_pantry", function(req, res) {
    Pantry.create({
      user_id: req.body.user_id,
      food_name: req.body.food_name,
      food_type: req.body.food_type,
      quantity: req.body.quantity,
      price: req.body.price
    }).then(() => {
      console.log("Success");
      res.end();
    });
  });

  app.get("/api/pantry", function(req, res) {
    //retrieves a unique user
    Pantry.findAll({
      where: {
        user_id: req.query.user_id
      }
    }).then(result => {
      res.json(result);
    });
  });

  app.post("/api/add_groceries", function(req, res) {
    Groceries.create({
      user_id: req.body.user_id,
      food_name: req.body.food_name
    }).then(() => {
      console.log("Success");
      res.end();
    });
  });

  app.get("/api/groceries", function(req, res) {
    //retrieves a unique user
    Groceries.findAll({
      where: {
        user_id: req.query.user_id
      }
    }).then(result => {
      res.json(result);
    });
  });

  app.delete("/api/pantry_remove", function(req, res) {
    console.log(req);
    Pantry.destroy({
      where: {
        food_id: req.query.food_id
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  app.delete("/api/groceries_remove", function(req, res) {
    Groceries.destroy({
      where: {
        food_id: req.query.food_id
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  app.put("/api/update_budget", function(req, res) {
    console.log(req);
    Login.update(
      {
        budget: req.body.budget
      },
      {
        where: {
          user_id: req.body.user_id
        }
      }
    ).then(updatedMax => {
      console.log(updatedMax);
      res.end();
    });
    res.end();
  });
};
