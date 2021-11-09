import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Vehicle from "App/Models/Vehicle";

export default class VehiclesController {
  public async index() {
    const vehicles = await Vehicle.all();

    return vehicles;
  }

  public async show({ params, auth, response }: HttpContextContract) {
    const { id } = params;
    const vehicle = await Vehicle.findOrFail(id);

    if (vehicle.userId !== auth.user?.id) {
      return response
        .status(401)
        .json({ message: "you can only see your vehicles" });
    }

    return response.json(vehicle);
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

  public async owner({params, response}: HttpContextContract) {
    const { id } = params;

    const vehicle = await Vehicle.findOrFail(id);

    const owner = await vehicle.owner()

    return response.json(owner[0])
  }

  public async associateOwner({ params, response }: HttpContextContract) {
    const { id, userId } = params

    const vehicle = await Vehicle.findOrFail(id)
    
    if (vehicle.hasOwner()) {
      if (userId == vehicle.userId) {
        return response.status(400).json({ message: "this user already own this vehicle" })
      } 
      else { // userId != vehicle.userId
        return response.status(401).json({ message: "this vehicle belongs to another user." })
      }
    }
    
    const success = await vehicle.associateOwner(vehicle, userId)

    if (!success) {
      return response.status(500).json({message: "Internal server error"})
    }

    return response.status(200).json({message: "vehicle owner successfully associated"})
  }

  public async dissociateOwner({ params, auth, response }: HttpContextContract) {
    const { id, userId } = params

    if (userId != auth.user?.id) {
      return response.status(401).json({ message: "you must be logged in first" })
    }

    const vehicle = await Vehicle.findOrFail(id)

    if (userId != vehicle.userId) {
      return response.status(401).json({ message: "this user doesn't own this vehicle" })
    }
    
    const success = await vehicle.dissociateOwner(vehicle)

    if (!success) {
      return response.status(500).json({message: "Internal server error"})
    }

    return response.status(200).json({message: "vehicle owner successfully dissociated"})
  }
}
