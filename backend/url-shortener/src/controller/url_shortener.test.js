const request = require("supertest");
const app = require("../../index");
const mongo = require("../service/mongo");

describe("Launches API", () => {
  beforeAll(async () => {
    await mongo.mongoConnect();
  });

  afterAll(async () => {
    await mongo.mongoDisconnect();
  });

  describe("Test GET /api/shorturl", () => {
    test("It should respond with 302 success", async () => {
      const response = await request(app).get("/api/shorturl").expect(302);

      expect(response.headers.location).toBe("https://nodejs.org/");
    });
  });

  describe("Test POST /api/shorturl", () => {
    test("It should response with 400", async () => {
      const response = await request(app)
        .post("/api/shorturl")
        .send({ url: "asfasdfasdf" })
        .expect(400);
    });

    test("It should response with 400", async () => {
      const response = await request(app)
        .post("/api/shorturl")
        .send({ url: "https://com/" })
        .expect(400);

      expect(response.body).toStrictEqual({
        error: "invalid url",
      });
    });
  });
});
