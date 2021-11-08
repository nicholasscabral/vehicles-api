import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Vehicle from "App/Models/Vehicle";

export default class VehiclesController {
  public async index() {
    const vehicles = await Vehicle.all();

    return vehicles;
  }

  public async store({ request, auth, response }: HttpContextContract) {
    const data = request.all();

    console.log(auth.user)

    const vehicle = await Vehicle.create({ userId: auth.user?.id, ...data});

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
}
