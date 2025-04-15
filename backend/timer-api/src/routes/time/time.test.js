const request = require("supertest");
const app = require("../../app");

describe("Time API", () => {
  describe("GET /Time", () => {
    test("It should return 200", async () => {
      await request(app)
        .get("/time")
        .expect("Content-Type", /json/)
        .expect(200);
    });
  });
  describe("GET /Time/:Id", () => {
    test("It should return 200", async () => {
      await request(app)
        .get("/time/2015-12-25")
        .expect("Content-Type", /json/)
        .expect(200);
    });
    test("It should return 200", async () => {
      await request(app)
        .get("/time/1451001600000")
        .expect("Content-Type", /json/)
        .expect(200);
    });

    test("It should return 400", async () => {
      const response = await request(app)
        .get("/time/HEHEHE")
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body).toStrictEqual({
        error: "Not a date",
      });
    });
  });
});
