import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class UsersController {
  public async index(): Promise<User[]> {
    const users = await User.all();

    return users;
  }

  public async show({ params, response }: HttpContextContract) {
    const { id } = params;

    const user = await User.findOrFail(id);

    return response.json(user);
  }
}
