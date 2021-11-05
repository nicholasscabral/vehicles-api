import Route from "@ioc:Adonis/Core/Route";

Route.post("/", "AuthController.register");
Route.post("/login", "AuthController.login");

Route.get("/", "UsersController.index").middleware(["auth"]);
