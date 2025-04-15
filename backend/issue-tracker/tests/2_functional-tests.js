const chaiHttp = require("chai-http");
const chai = require("chai");
const assert = chai.assert;
const server = require("../server");
const mongo = require("../services/mongo");
chai.use(chaiHttp);

suite("Functional Tests", function () {
  this.beforeAll(async () => {
    await mongo.mongoConnect();
  });

  suite("POST request", () => {
    test("Create an issue with every field: POST request to /api/issues/{project}", async () => {
      const response = await chai.request(server).post("/api/issues/apitest").send({
        issue_title: "Test issue",
        issue_text: "This is a test",
        created_by: "sammy",
        assigned_to: "sammy",
        status_text: "none",
      });

      assert.equal(response.status, 200);
      assert.equal(response.body.issue_title, "Test issue");
      assert.equal(response.body.issue_text, "This is a test");
      assert.equal(response.body.created_by, "sammy");
      assert.equal(response.body.assigned_to, "sammy");
      assert.equal(response.body.status_text, "none");
      assert.equal(response.body.open, true);
      assert.isOk(response.body._id);
      assert.isOk(response.body.created_on);
      assert.isOk(response.body.updated_on);
    });
    test("Create an issue with only required fields: POST request to /api/issues/{project}", async () => {
      const response = await chai.request(server).post("/api/issues/apitest").send({
        issue_title: "Test issue",
        issue_text: "This is a test",
        created_by: "sammy",
      });
      assert.equal(response.status, 200);
      assert.equal(response.body.issue_title, "Test issue");
      assert.equal(response.body.issue_text, "This is a test");
      assert.equal(response.body.created_by, "sammy");
      assert.equal(response.body.assigned_to, "");
      assert.equal(response.body.status_text, "");
      assert.exists(response.body._id);
    });
    test("Create an issue with missing required fields: POST request to /api/issues/{project}", async () => {
      const response = await chai.request(server).post("/api/issues/apitest").send({
        issue_title: "Test issue",
        issue_text: "This is a test",
      });
      assert.equal(response.body.error, "required field(s) missing");
    });
  });

  suite("GET requests", () => {
    test("View issues on a project: GET request to /api/issues/{project}", async () => {
      const response = await chai.request(server).get("/api/issues/apitest");
      assert.equal(response.status, 200);
      assert.exists(response.body[0]);
      assert.exists(response.body[0].issue_title);
    });

    test("View issues on a project with one filter: GET request to /api/issues/{project}", async () => {
      const response = await chai.request(server).get("/api/issues/apitest").query({ open: true });
      assert.equal(response.body[0].open, true);
    });

    test("View issues on a project with multiple filters: GET request to /api/issues/{project}", async () => {
      const response = await chai
        .request(server)
        .get("/api/issues/apitest")
        .query({ open: true, assigned_to: "nobody" });
      assert.equal(response.body[0].open, true);
      assert.equal(response.body[0].assigned_to, "nobody");
    });
  });

  suite("PUT requests", () => {
    test("Update one field on an issue: PUT request to /api/issues/{project}", async () => {
      const response = await chai
        .request(server)
        .put("/api/issues/apitest")
        .send({ _id: "662231e0e712ed677eaca356", open: false });
      assert.equal(response.body.result, "successfully updated");
      assert.equal(response.body._id, "662231e0e712ed677eaca356");
    });

    test("Update multiple fields on an issue: PUT request to /api/issues/{project}", async () => {
      const response = await chai.request(server).put("/api/issues/apitest").send({
        _id: "662231e0e712ed677eaca356",
        open: true,
        assigned_to: "not sammy",
      });
      assert.equal(response.body.result, "successfully updated");
      assert.equal(response.body._id, "662231e0e712ed677eaca356");
    });

    test("Update an issue with missing _id: PUT request to /api/issues/{project}", async () => {
      const response = await chai.request(server).put("/api/issues/apitest").send({ open: false });

      assert.equal(response.body.error, "missing _id");
    });

    test("Update an issue with no fields to update: PUT request to /api/issues/{project}", async () => {
      const response = await chai
        .request(server)
        .put("/api/issues/apitest")
        .send({ _id: "662231e0e712ed677eaca356" });
      assert.equal(response.body.error, "no update field(s) sent");
      assert.equal(response.body._id, "662231e0e712ed677eaca356");
    });

    test("Update an issue with an invalid _id: PUT request to /api/issues/{project}", async () => {
      const response = await chai
        .request(server)
        .put("/api/issues/apitest")
        .send({ _id: "invalid", open: false });
      assert.equal(response.body.error, "could not update");
      assert.equal(response.body._id, "invalid");
    });
  });

  suite("DELETE requests", () => {
    test("Delete an issue: DELETE request to /api/issues/{project}", async () => {
      const createResponse = await chai.request(server).post("/api/issues/apitest").send({
        issue_title: "Test issue",
        issue_text: "This is a test",
        created_by: "sammy",
        assigned_to: "sammy",
        status_text: "none",
      });
      const deleteRespones = await chai
        .request(server)
        .delete("/api/issues/apitest")
        .send({ _id: createResponse.body._id });
      assert.equal(deleteRespones.body.result, "successfully deleted");
      assert.equal(deleteRespones.body._id, createResponse.body._id);
    });

    test("Delete an issue with an invalid _id: DELETE request to /api/issues/{project}", async () => {
      const deleteRespones = await chai
        .request(server)
        .delete("/api/issues/apitest")
        .send({ _id: "INVALID STILL" });
      assert.equal(deleteRespones.body.error, "could not delete");
      assert.equal(deleteRespones.body._id, "INVALID STILL");
    });

    test("Delete an issue with missing _id: DELETE request to /api/issues/{project}", async () => {
      const deleteResponse = await chai.request(server).delete("/api/issues/apitest");
      assert.equal(deleteResponse.body.error, "missing _id");
    });
  });
});
