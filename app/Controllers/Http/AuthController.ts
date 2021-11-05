import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "../../Models/User";

export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    const { email, password } = request.only(["email", "password"]);

    const user = await User.create({ email: email, password: password });

    return response.json(user);
  }

  public async authenticate({ request, auth }: HttpContextContract) {
    const { email, password } = request.only(["email", "password"]);

    const token = await auth.attempt(email, password);

    return token;
  }
}
