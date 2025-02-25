/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
// integration test for books
const request = require("supertest");
const { MongoClient } = require("mongodb");

const createApp = require("../src/app");
const { config } = require("../src/config");

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe("test for Books", () => {
  let app = null;
  let server = null;
  let database = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3002);

    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await database.dropDatabase();
  });

  describe(" test for [GET] /api/v1/books", () => {
    test("should return a list of books", async () => {
      const seedData = await database.collection("books").insertMany([
        { title: "book1", year: "1200" },
        { title: "book2", year: "2000" },
      ]);

      return request(app)
        .get("/api/v1/books")
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
