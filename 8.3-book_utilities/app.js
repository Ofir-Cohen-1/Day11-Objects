//1
const book1 = {
  name: "Harry potter",
  autor: "J.K. Rowling",
  year: 1997,
};
const book2 = {
  name: "Hamlet",
  autor: "William Shakespeare",
  year: 1600,
};

//2
const bookUtiles = {};

//3
bookUtils.getFirstPublished = (b1, b2) => {
    return b1.year > b2.year ? b1.year : b2.year;
  };

  //4
bookUtils.setNewEdition = (book, edition) => {
    book.latestEdition = edition;
  };

  //5
bookUtils.setLanguage = (book, lang) => {
    book.language = lang;
  };
  
  // 6.
  bookUtils.setTranslation = (book, lang, trans) => {
    book.translation = [trans, lang];
  };
  
  // 7.
  bookUtils.setPublisher = (book, name, location) => {
    book.publisher = { name, location };
  };
  
  // 8.
  bookUtils.isSamePublisher = (b1, b2) => {
    return (
      b1.publisher.name === b2.publisher.name &&
      b1.publisher.location === b2.publisher.location
    );
  };