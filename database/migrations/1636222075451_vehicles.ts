import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Vehicles extends BaseSchema {
  protected tableName = "vehicles";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("plate").notNullable().unique();
      table.text("description").notNullable();
      table.string("color").notNullable();
      table.string("model").notNullable();
      table.string("address").notNullable();
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
