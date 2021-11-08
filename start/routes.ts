import Route from "@ioc:Adonis/Core/Route";

Route.post("/", "AuthController.register");
Route.post("/login", "AuthController.login");

Route.get("/users", "UsersController.index").middleware(["auth"]);

// Route.get("/vehicles", "VehiclesController.index");
// Route.put("/vehicle/:id", "VehiclesController.update");

Route.group(() => {
  Route.resource("vehicles", "VehiclesController").apiOnly();
  // Route.post("/vehicle", "VehiclesController.store")
}).middleware(["auth"]);

Route.get(
  "/vehicles/u/:userId",
  "VehiclesController.vehiclesByUser"
).middleware(["auth"]);
