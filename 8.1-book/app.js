const book = {
  name: "Harry potter",
  "autor name": "J.K. Rowling",
  "publishing year": 1997,
};

function bookData(book) {
    return `The book ${book['name']} was written by ${book['autor name']} in the year ${book['publishing year']}`;
  }
  console.log(bookData(book));