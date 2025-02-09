/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
// test of the hello world endpoint
const request = require("supertest");

const createApp = require("../src/app");

describe("test for hello world endpoint", () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3000);
  });

  afterAll(async () => {
    await server.close();
  });

  describe(" test for get", () => {
    test("should return hello World", async () => {
      request(app)
        .get("/")
        .expect(200)
        .then((response) => {
          const { text } = response;
          console.log(text);
          expect(text).toContain("Hello World");
        });
    });

    test("should return a 200 status", async () => {
      request(app)
        .get("/")
        .expect(200)
        .then((response) => {
          const { status } = response;
          console.log(status);
          expect(status).toBe(200);
        });
    });
  });
});
