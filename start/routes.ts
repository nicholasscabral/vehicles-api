import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.post("/register", "AuthController.register").as("auth.login")
  Route.post("/login", "AuthController.login").as("auth.register")
}).prefix("/auth")

Route.group(() => {
  Route.resource("users", "UsersController").apiOnly()
  Route.get("users/:id/vehicles", "UsersController.vehicles").as("users.vehicles")
}).middleware(["auth"]);

Route.group(() => {
  Route.resource("vehicles", "VehiclesController").apiOnly();
  Route.get("/vehicles/:id/owner", "VehiclesController.owner").as("vehicles.owner")
  Route.put("/vehicles/:id/associate/:userId", "VehiclesController.associateOwner").as("vehicles.associateOwner")
  Route.put("/vehicles/:id/dissociate/:userId", "VehiclesController.dissociateOwner").as("vehicles.dissociateOwner")
}).middleware(["auth"]);

Route.get("/vehicle/location/", "VehiclesController.location")
