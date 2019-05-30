# React Google Book Search


The Google Book Search is a React-based Search application. a Search page (home page) searches and renders books via the Google Books API. This page gives the option to "View" or "Save" a book. The Save page renders all saved books to the Mongo database. This page offers the user the option to "View" or "Delete" a saved book, hereby removing it from the Mongo database.

**This application consists of the following 2 pages:**

The *Search* page which offers the user the option to "View" or "Save" a book.

<img src="https://github.com/Heidijvr/NYT-Books-Search/blob/master/assets/images/search.png" alt Searched Books>

---

The *Saved* which page offers the user the option to "View" or "Delete" a saved book.


<img src="https://github.com/Heidijvr/NYT-Books-Search/blob/master/assets/images/saved.png" alt Saved Books>

[**Try out the Application here!**](https://heidijvr-books-search.herokuapp.com/ "Heroku Homepage")

This application is built with a full stack social network app - **MERN** - which consists of: MONGODB, Express, React, and Node.js.

The following npm packages were used on the client-side: axios, react, react-dom, react-router-dom, react-scripts, 

The following npm packages were used on the server-side: axios, bootstrap, express, if-env, and mongoose.

The API is based on the google books api: https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699

---

This assignment is in fulfillment of the requirements for the bootcamp of the University of Washington (September 2018 - April 2019)
