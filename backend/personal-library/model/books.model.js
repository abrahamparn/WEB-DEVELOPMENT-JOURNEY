//create books on startup
const books = require("./books.mongo");
async function createBooksOnStartup() {
  const bookData = [
    {
      _id: "63657911922d375e25ad1b85",
      title: "The nya nya test book",
      comments: ["mew", "meow", "NYA"],
    },
    {
      _id: "63680748dad31302a987eaed",
      title: "Comment modification testnya",
    },
  ];

  try {
    for (const book of bookData) {
      const existingBook = await books.findOne({ _id: book._id });
      if (!existingBook) {
        await books.create(book);
      }
    }
  } catch (err) {
    throw new Error(err);
  }
}

async function getBooksData() {
  try {
    const docs = await books.find({});
    const booksWithCommentsCount = docs.map((doc) => ({
      _id: doc._id,
      title: doc.title,
      commentcount: doc.comments ? doc.comments.length : 0,
    }));
    return booksWithCommentsCount;
  } catch (err) {
    throw new Error(err);
  }
}

async function createBook(title) {
  try {
    const doc = await books.create({ title: title });
    return { title: doc.title, _id: doc._id };
  } catch (err) {
    throw new Error(err);
  }
}

async function deleteBooks() {
  try {
    await books.deleteMany();
    return "complete delete successful";
  } catch (err) {
    console.error(err);
    throw new Error("Failed to delete books");
  }
}

async function getBookById(bookid) {
  try {
    const doc = await books.findById(bookid);
    if (!doc) return "no book exists";
    return doc;
  } catch (err) {
    console.error(err);
    return "no book exists";
  }
}

async function updateBooksById(bookid, comment) {
  try {
    const doc = await books.findByIdAndUpdate(
      bookid,
      { $push: { comments: comment } },
      { new: true }
    );
    if (!doc) return "no book exists";
    return doc;
  } catch (err) {
    console.error(err);
    return "no book exists";
  }
}

async function deleteBookById(bookid) {
  try {
    const doc = await books.findByIdAndDelete(bookid);
    if (!doc) return "no book exists";
    return "delete successful";
  } catch (err) {
    console.error(err);
    return "no book exists";
  }
}

module.exports = {
  createBooksOnStartup,
  getBooksData,
  createBook,
  deleteBooks,
  getBookById,
  updateBooksById,
  deleteBookById,
};
