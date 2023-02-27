import ApiGateway from "../Shared/ApiGateway";

class BooksRepository {
  httpGateway: ApiGateway;
  constructor() {
    this.httpGateway = new ApiGateway();
  };

  getAllBooks = () => {
    try {
      const booksDto = this.httpGateway.get("/postnikov");
      return booksDto;
    } catch (err) {
      console.log(err);
      return Promise.resolve([]);
    }
  };

  getPrivateBooks = () => {
    try {
      const privateBooksDto = this.httpGateway.get("/postnikov/private");
      return privateBooksDto;
    } catch (err) {
      console.log(err);
      return Promise.resolve([]);
    }
  };

  addBook = async (name: string, author: string) => {
    try {
      const bookAddDto = await this.httpGateway.post("/books", { name, author });
      return bookAddDto && bookAddDto.status === "ok" ? true : false;
    } catch (err) {
      console.log(err);
      return null;
    }
  };
};

const booksRepository = new BooksRepository();
export default booksRepository;
