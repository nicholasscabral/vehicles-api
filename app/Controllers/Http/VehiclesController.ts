import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import Vehicle from "App/Models/Vehicle";

export default class VehiclesController {
  public async index() {
    const vehicles = await Vehicle.all();

    return vehicles;
  }

  public async store({ request, auth, response }: HttpContextContract) {
    const data = request.all();

    const vehicle = await Vehicle.create({ userId: auth.user?.id, ...data });

    return response.status(201).json(vehicle);
  }

  public async update({ request, response, params }: HttpContextContract) {
    const { id } = params;

    const vehicle = await Vehicle.findOrFail(id);

    const { newPlate, newDescription, newColor, newModel, newLocation } =
      request.all();

    if (newPlate) vehicle.plate = newPlate;
    if (newDescription) vehicle.description = newDescription;
    if (newColor) vehicle.color = newColor;
    if (newModel) vehicle.model = newModel;
    if (newLocation) vehicle.location = newLocation;

    const savedVehicle = await vehicle.save();

    return response.json(savedVehicle);
  }

  public async destroy({ params, auth, response }: HttpContextContract) {
    const { id } = params;
    const vehicle = await Vehicle.findOrFail(id);

    if (vehicle.userId !== auth.user?.id) {
      return response
        .status(401)
        .json({ message: "you can only delete your vehicles" });
    }

    await vehicle.delete();

    return response.json({ message: "Vehicle deleted successfully" });
  }

  public async vehiclesByUser({ params, auth, response }: HttpContextContract) {
    const { userId } = params;

    if (userId != auth.user?.id) {
      return response
        .status(401)
        .json({ message: "you can only list your vehicles" });
    }

    const user = await User.findOrFail(userId);

    const vehicles = await user.related("vehicles").query();

    return vehicles;
  }
}
