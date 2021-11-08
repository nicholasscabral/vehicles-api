import Route from "@ioc:Adonis/Core/Route";

Route.post("/", "AuthController.register");
Route.post("/login", "AuthController.login");

Route.get("/users", "UsersController.index").middleware(["auth"]);

Route.get("/vehicles", "VehiclesController.index");
Route.post("/vehicle", "VehiclesController.store").middleware(["auth"]);
Route.put("/vehicle/:id", "VehiclesController.update");
