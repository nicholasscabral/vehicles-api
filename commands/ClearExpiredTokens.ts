import { BaseCommand } from "@adonisjs/core/build/standalone";
export default class ClearExpiredTokens extends BaseCommand {
  public static commandName = "clear:expired_tokens";

  public static needsApplication = true;

  public static description = "automatically delete all the expired tokens";

  public static settings = {
    loadApp: true,
    stayAlive: false,
  };

  public async run() {
    const Database = (await import("@ioc:Adonis/Lucid/Database")).default;

    const expiredTokens = await Database.from("api_tokens")
      .where("expires_at", "<", new Date())
      .select("id", "expires_at");
    const deletedTokens = await Database.from("api_tokens")
      .where("expires_at", "<", new Date())
      .delete();

    console.log(expiredTokens, `${deletedTokens} tokens were deleted`);
  }
}
