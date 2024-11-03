import { CharacterFactory } from "./CharacterFactory";
import { Databases } from "../Database/Databases";
import { PlayerAttributes } from "./PlayerAttributes";
import fs from "fs";

describe("CharacterFactory", () => {
  let databases: Databases;
  let factory: CharacterFactory;

  beforeAll(async () => {
    // Mock the global.fetch function
    global.fetch = jest.fn((input: RequestInfo | URL, init?: RequestInit) => {
      let url: string;
      if (typeof input === "string") {
        url = input;
      } else if (input instanceof URL) {
        url = input.toString();
      } else if ("url" in input) {
        // For Request objects
        url = input.url;
      } else {
        throw new Error("Invalid input to fetch");
      }
      // Adjust the path to your actual config files location
      const basePath = "./public"; // Adjust this path as necessary
      let filePath = "";
      if (url.endsWith("/configs/job_db.conf")) {
        filePath = `${basePath}/configs/job_db.conf`;
      } else if (url.endsWith("/configs/job_db2.txt")) {
        filePath = `${basePath}/configs/job_db2.txt`;
      } else if (url.endsWith("/configs/exp_group_db.conf")) {
        filePath = `${basePath}/configs/exp_group_db.conf`;
      } else if (url.endsWith("/configs/item_db.conf")) {
        filePath = `${basePath}/configs/item_db.conf`;
      } else if (url.endsWith("/configs/item_db2.conf")) {
        filePath = `${basePath}/configs/item_db2.conf`;
      } else {
        throw new Error(`Unexpected fetch URL: ${url}`);
      }
      const configContent = fs.readFileSync(filePath, "utf8");
      return Promise.resolve({
        ok: true,
        status: 200,
        text: async () => configContent,
      } as Response);
    });

    databases = await Databases.create();
    factory = CharacterFactory.create(databases);
  });

  afterAll(() => {
    // Restore the original fetch function after tests
    (global.fetch as jest.Mock).mockRestore();
  });

  it("should create PlayerAttributes with correct dependencies", async () => {
    const player = await factory.createPlayerAttributes("TestPlayer", 1);

    expect(player).toBeInstanceOf(PlayerAttributes);
    expect(player.databases).toBe(databases);
  });
});
