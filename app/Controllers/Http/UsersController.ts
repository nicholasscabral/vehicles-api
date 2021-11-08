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

  public async destroy({ params, auth, response }: HttpContextContract) {
    const { id } = params;

    if (id != auth.user?.id) {
      return response
        .status(401)
        .json({ message: "you can't only delete your account" });
    }

    const user = await User.findOrFail(id);

    await user.delete();

    return response.json({ message: "user deleted successfully" });
  }
}
