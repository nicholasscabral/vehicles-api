import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Vehicles extends BaseSchema {
  protected tableName = "vehicles";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.string("plate").notNullable().unique();
      table.text("description").notNullable();
      table.string("color").notNullable();
      table.string("model").notNullable();
      table.string("location").notNullable();
      table.dateTime("created_at", { useTz: true }).defaultTo(this.now());
      table.dateTime("updated_at", { useTz: true }).defaultTo(this.now());
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
