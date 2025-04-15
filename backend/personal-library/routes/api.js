/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";
const booksModel = require("./../model/books.model");
module.exports = function (app) {
  app
    .route("/api/books")
    .get(async (req, res) => {
      let response = await booksModel.getBooksData();

      return res.json(response);
    })

    .post(async (req, res) => {
      let title = req.body.title;
      if (!title) {
        return res.json("missing required field title");
      }
      const response = await booksModel.createBook(title);
      return res.json(response);
    })

    .delete(async (req, res) => {
      const response = await booksModel.deleteBooks();
      return res.json(response);
    });

  app
    .route("/api/books/:id")
    .get(async (req, res) => {
      let bookid = req.params.id;
      if (!bookid) {
        return res.json("missing required field id");
      }
      const response = await booksModel.getBookById(bookid);
      return res.json(response);
      //json res format: {"_id": bookid, "title": book_title, "comments": [comment,comment,...]}
    })

    .post(async (req, res) => {
      let bookid = req.params.id;
      let comment = req.body.comment;
      if (!bookid) {
        return res.json("missing required field id");
      }
      if (!comment) {
        return res.json("missing required field comment");
      }
      const response = await booksModel.updateBooksById(bookid, comment);
      return res.json(response); // Return the full book object
    })

    .delete(async (req, res) => {
      let bookid = req.params.id;
      if (!bookid) {
        return res.json("no book exists");
      }
      const response = await booksModel.deleteBookById(bookid);
      return res.json(response);
      //if successful response will be 'delete successful'
    });
};
