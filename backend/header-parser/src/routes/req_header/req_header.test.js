const request = require("supertest");
const app = require("../../app");

describe("Header API", () => {
  test("it should return 200", async () => {
    await request(app)
      .get("/api/whoami")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});
