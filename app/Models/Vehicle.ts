import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import User from "./User";
import Database from "@ioc:Adonis/Lucid/Database";

export default class Vehicle extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public userId: number;

  @column()
  public plate: string;

  @column()
  public description: string;

  @column()
  public color: string;

  @column()
  public model: string;

  @column()
  public location: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>;

  async owner() {
    return await Database.from("users")
    .where("id", this.userId)
    .select("id", "email")
  }

  async associateOwner(vehicle: Vehicle, userId: string) {  
    try {
      const user = await User.findOrFail(userId)
      await vehicle.related("user").associate(user)

      return true
    } catch (err) {
      return false
    }
  }
}
