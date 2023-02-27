import booksContainerCtrl from './BooksContainer.ctrl';

describe('BooksProvider', () => {
  it('fetches books', async () => {
    const fetchedAllBooks = await booksContainerCtrl.getAllBooks();
    const fetchedPrivateBooks = await booksContainerCtrl.getPrivateBooks();
    const isBookAdded = await booksContainerCtrl.addBook('pucki', 'x_author');

    expect(isBookAdded).toBeTruthy();

    expect(fetchedAllBooks).toEqual(expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        ownerId: expect.any(String),
        author: expect.any(String)
      }),
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        ownerId: expect.any(String),
        author: expect.any(String)
      }),
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        ownerId: expect.any(String),
        author: expect.any(String)
      }),
      expect.objectContaining({ name: expect.any(String), author: expect.any(String) }),
      expect.objectContaining({ name: expect.any(String), author: expect.any(String) }),
    ]));

    expect(fetchedPrivateBooks).toEqual(expect.arrayContaining([
      expect.objectContaining({ name: expect.any(String), author: expect.any(String) }),
      expect.objectContaining({ name: expect.any(String), author: expect.any(String) })
    ]));
  });
});
