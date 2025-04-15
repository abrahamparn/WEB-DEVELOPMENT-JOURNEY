const request = require("supertest");
const app = require("../../index");
const mongo = require("../service/mongo");

describe("Exercise Tracker API", () => {
  beforeAll(async () => {
    await mongo.mongoConnect();
  });

  afterAll(async () => {
    await mongo.mongoDisconnect();
  });
  const username = "abraham_pn";
  let userid;
  describe("Test POST /api/users", () => {
    test("It should respond with 200 success", async () => {
      const response = await request(app)
        .post("/api/users")
        .send({ username: username })
        .expect(200);

      userid = response.body._id;
    });
  });
  const dataToSend = {
    description: "Testing",
    duration: 90,
    date: "2024-01-01",
  };

  describe("Test POST /api/users/:_id/exercises", () => {
    test("It should response with 400", async () => {
      const response = await request(app)
        .post(`/api/users/${1234}/exercises`)
        .send(dataToSend)
        .expect(400);

      expect(response.body).toStrictEqual({
        error: "No such user",
      });
    });

    test("It should response with 400", async () => {
      const response = await request(app)
        .post(`/api/users/${userid}/exercises`)
        .send({
          description: "",
          duration: 90,
          date: "2024-01-01",
        })
        .expect(400);

      expect(response.body).toStrictEqual({
        error: "Please input description",
      });
    });

    test("It should response with 400", async () => {
      const response = await request(app)
        .post(`/api/users/${userid}/exercises`)
        .send({
          description: "Testing",
          duration: "",
          date: "2024-01-01",
        })
        .expect(400);

      expect(response.body).toStrictEqual({
        error: "Please input duration number",
      });
    });

    test("It should response with 400", async () => {
      const response = await request(app)
        .post(`/api/users/${userid}/exercises`)
        .send({
          description: "Testing",
          duration: 90,
          date: "asdfasdf",
        })
        .expect(400);

      expect(response.body).toStrictEqual({
        error: "Invalid date format",
      });
    });

    test("It should response with 200", async () => {
      const response = await request(app)
        .post(`/api/users/${userid}/exercises`)
        .send(dataToSend)
        .expect(200);

      expect(response.body).toStrictEqual({
        _id: `${userid}`,
        username: "abraham_pn",
        description: "Testing",
        duration: 90,
        date: "Mon Jan 01 2024",
      });
    });
  });

  describe("Test POST /api/users/:_id/logs", () => {
    test("It should respond with 200 success", async () => {
      console.log(userid);
      const response = await request(app)
        .get(`/api/users/${userid}/logs`)
        .send({ username: username })
        .expect(200);

      expect(response.body).toStrictEqual({
        _id: `${userid}`,
        username: "abraham_pn",
        count: 1,
        log: [
          {
            description: "Testing",
            duration: 90,
            date: "Mon Jan 01 2024",
          },
        ],
      });
    });
  });
});
