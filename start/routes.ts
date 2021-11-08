import Route from "@ioc:Adonis/Core/Route";

Route.post("/", "AuthController.register");
Route.post("/login", "AuthController.login");

Route.get("/user", "UsersController.index").middleware(["auth"]);

Route.get("/vehicles", "VehiclesController.index");
Route.post("/vehicle", "VehiclesController.create");
Route.put("/vehicle/:id", "VehiclesController.update");
