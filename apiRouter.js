var express = require("express");
var userCtrl = require("./route/userCtrl");

// Router

exports.router = (() => {
  var apiRouter = express.Router();

  //Pizza	routes
  //	apiRouter.route('/pizzas/add/').post(pizzaCtrl.add)
  //	apiRouter.route('/pizzas/getPizza/').get(pizzaCtrl.getPizza)
  //  apiRouter.route('/user/allUsers/').get(userCtrl.getAllUsers)
  //	apiRouter.route('/pizzas/updatePizza/').put(pizzaCtrl.updatePizza)
  //	apiRouter.route('/pizzas/deletePizza/').delete(pizzaCtrl.deletePizza)

  // API ROUTER - William

  apiRouter.route("/user/addUser/").get(userCtrl.addUser);

  return apiRouter;
})();


 /* Créer un nouvel utilisateur
  apiRouter.route.post(userCtrl.create);
  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);
  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);
  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);
  // Update a Tutorial with id
  router.put("/:id", tutorials.update);
  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);
  // Delete all Tutorials
  router.delete("/", tutorials.deleteAll);
  app.use('/api/tutorials', router);
*/