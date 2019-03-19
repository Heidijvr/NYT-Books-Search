# React Google Book Search


The Google Boook Search Application is a React-based Search app. It requires creating React components, helper/util functions, and utilizing React lifecycle methods, to query and display books based on user searches. It also involves using Node, Express and MongoDB so that users can save books to review or purchase later.

**This application consists of the following 2 pages:**

The user uses the *Search* page to search and render books via the Google Books API. This page offers the user the option to "View" or "Save" a book, saving the book to the Mongo database.

<img src="https://github.com/Heidijvr/NYT-Books-Search/blob/master/assets/images/search.png" alt Searched Books>

---

The *Saved* page renders all saved books to the Mongo database. This page offers the user the option to "View" or "Delete" a saved book, hereby removing it from the Mongo database.


<img src="https://github.com/Heidijvr/NYT-Books-Search/blob/master/assets/images/saved.png" alt Saved Books>

[**Try out the Application here!**](https://heidijvr-books-search.herokuapp.com/ "Heroku Homepage")

This application is built with a full stack social network app - **MERN** - which consists of: MONGODB, Express, React, and Node.js.

The following npm packages were used on the client-side: axios, react, react-dom, react-router-dom, react-scripts, 

The following npm packages were used on the server-side: axios, bootstrap, express, if-env, and mongoose.

The API is based on the google books api: https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699

---

This assignment is in fulfillment of the requirements for the bootcamp of the University of Washington (September 2018 - April 2019)
