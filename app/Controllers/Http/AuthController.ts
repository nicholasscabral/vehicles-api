import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "../../Models/User";
export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    const { email, password } = request.only(["email", "password"]);

    if (!email || !password)
      return response.status(400).json({ message: "credentials are missing" });

    try {
      const userAlreadyExists = await User.findBy("email", email);

      if (userAlreadyExists)
        return response.status(409).json({ message: "User already exists" });

      const user = await User.create({ email: email, password: password });

      return response.status(201).json(user);
    } catch (err) {
      console.log("AuthController.register :>> ", err.message);
      return response.status(500).json({ message: "could not create user" });
    }
  }

  public async login({ request, auth, response }: HttpContextContract) {
    const { email, password } = request.all();

    const user = await User.findBy("email", email);

    if (!user) {
      return response.status(404).json({ message: "user not found" });
    }

    const res = await auth.attempt(email, password, { expiresIn: "2 min" });

    user.token = res.token;

    await user.save();

    // Database.from("api_tokens").where("expires_at", "<", "NOW()").delete();

    return response.status(200).json({ user, token: res });
  }
}
