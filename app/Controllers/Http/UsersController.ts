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

  public async update({ request, params, auth, response }: HttpContextContract) {
    const { id } = params;
    
    if (id != auth.user?.id) {
      return response
      .status(401)
      .json({ message: "you can only edit your account" });
    }

    if (Object.keys(request.all()).length === 0) {
      return response.status(400).json({message: 'you must edit at least one field'})
    }
    
    const { email, password, currentPassword } = request.all()

    const user = await User.findOrFail(id);

    if (email) user.email = email

    if (password) {
      if (!currentPassword) {
        return response.status(400).json({message: "you must provide your current password"})
      }

      const passwordMatch = await user.vefiryPassword(currentPassword);

      if (passwordMatch) user.password = password;
      else return response.status(409).json({ message: "Invalid password"})
    }

    const savedUser = await user.save()

    return savedUser  
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
