/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
// integration test for books
const mockGetAll = jest.fn();

const request = require("supertest");

const { generateManyBook } = require("../src/fakes/books.fake");

const createApp = require("../src/app");

jest.mock("../src/lib/mongo.lib", () =>
  jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: () => {},
  }))
);

describe("test for Books", () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe(" test for [GET] /api/v1/books", () => {
    test("should return a list of books", async () => {
      const fakeBooks = generateManyBook(3);
      mockGetAll.mockResolvedValue(fakeBooks);

      return request(app)
        .get("/api/v1/books")
        .expect(200)
        .then(({ body }) => {
          expect(body.length).toEqual(3);
        });
    });

    // test("should return a 200 status", async () => {
    //   request(app)
    //     .get("/")
    //     .expect(200)
    //     .then((response) => {
    //       console.log(response.status);
    //       expect(response.status).toBe(200);
    //     });
    // });
  });
});
