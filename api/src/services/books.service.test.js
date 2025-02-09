const { generateManyBook } = require("../fakes/books.fake");
const BooksService = require("./books.service");

const mockGetAll = jest.fn();

// const MongoLibStub = {
//   getAll: spyGetAll,
//   create: () => {},
// };

jest.mock("../lib/mongo.lib", () => {
  return jest.fn().mockImplementation(() => {
    return {
      getAll: mockGetAll,
      create: () => {},
    };
  });
});

describe("test for book service", () => {
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe("test for getBooks", () => {
    test(" should return an array of books", async () => {
      const fakeBooks = generateManyBook(10);
      mockGetAll.mockResolvedValue(fakeBooks);

      const books = await service.getBooks({});
      expect(books.length).toEqual(10);

      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledWith("books", {});
      expect(mockGetAll).toHaveBeenCalledTimes(1);
    });

    test("should return first element equal to", async () => {
      //mockGetAll.mockResolvedValue([{ _id: 1, title: "The Lord of the Rings" }]);

      const fakeBooks = generateManyBook(1);
      const books = await service.getBooks();
      expect(Object.keys(books[0])).toEqual(Object.keys(fakeBooks[0]));
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
    });
  });
});
