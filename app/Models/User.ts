import { v4 as uuid } from "uuid";
import { DateTime } from "luxon";
import { BaseModel, beforeCreate, column } from "@ioc:Adonis/Lucid/Orm";

export default class User extends BaseModel {
  public static tableName: string = "users";
  public static selfAssignPrimaryKey = true;

  @column({ isPrimary: true })
  public id: string;

  @column()
  public email: string;

  @column()
  public password: string;

  @column()
  public token: string;

  @column.dateTime({ autoCreate: false })
  public tokenExpires: DateTime;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @beforeCreate()
  public static assignUuid(user: User) {
    user.id = uuid();
  }
}
