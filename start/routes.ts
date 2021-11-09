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
}).middleware(["auth"]);