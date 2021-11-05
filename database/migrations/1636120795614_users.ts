import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Users extends BaseSchema {
  protected tableName = "users";

  public async up() {
    await this.db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');

    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.string("email", 200).unique().notNullable();
      table.string("password", 200).notNullable();
      table.string("token", 200); //nullable
      table.dateTime("token_expires"); //nullable
      table.dateTime("created_at", { useTz: true }).defaultTo(this.now());
      table.dateTime("updated_at", { useTz: true }).defaultTo(this.now());
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
