import axios from "axios";

export default {
  // Gets all books from Google API
  getBooks: function(q) {
    console.log("Getting books");
    return axios.get("/api/google", {params: { q: "title:" + q } });
  },
  // Gets the book with the given id
  getSavedBooks: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
