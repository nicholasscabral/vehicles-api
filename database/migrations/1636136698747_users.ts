import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class UsersSchema extends BaseSchema {
  protected tableName = "users";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.string("email", 255).notNullable();
      table.string("password", 180).notNullable();
      table.string("token").nullable();

      table
        .dateTime("created_at", { useTz: true })
        .defaultTo(this.now())
        .notNullable();
      table
        .dateTime("updated_at", { useTz: true })
        .defaultTo(this.now())
        .notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
