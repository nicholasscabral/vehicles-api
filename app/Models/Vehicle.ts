import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import User from "./User";

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
}
