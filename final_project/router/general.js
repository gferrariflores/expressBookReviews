const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req, res) => {
  //Write your code here
  //return res.status(300).json({ message: "Yet to be implemented" });
  const { username, password } = req.body; // Use req.body to access username and password
  if (username && password) {
    if (!isValid(username)) {
      users.push({ "username": username, "password": password });
      return res.status(200).json({ message: "User successfully registered. Now you can login" });
    } else {
      return res.status(400).json({ message: "Username is not valid" }); // Changed status code to 400 for bad request
    }
  }
  return res.status(404).json({ message: "Unable to register user." });
});



// Get the book list available in the shop
/*
public_users.get('/', function (req, res) {
  //Write your code here
  //return res.status(300).json({message: "Yet to be implemented!"});
  res.send(books);
});
*/

const booksPromise = new Promise((resolve, reject) => {
  try {
    const books = require("./booksdb.js");
    resolve(books);
  } catch (error) {
    reject(error);
  }
});

public_users.get('/', async function (req, res) {
  try {
    const books = await booksPromise;
    res.send(books);
  } catch (error) {
    console.error('Error fetching book list:', error);
    res.status(500).json({ message: 'Failed to fetch book list' });
  }
});

/*
// Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
  //Write your code here
  //return res.status(300).json({message: "Yet to be implemented"});
  const isbn = req.params.isbn;
  let booksArray = Object.values(books);
  let filtered_books = booksArray.filter((book) => book.isbn === isbn);
  res.send(filtered_books);
});
*/

// Wrap the logic in a promise
const getBookDetails = (isbn) => {
  return new Promise((resolve, reject) => {
    try {
      const booksArray = Object.values(books);
      const filtered_books = booksArray.filter((book) => book.isbn === isbn);
      resolve(filtered_books);
    } catch (error) {
      reject(error);
    }
  });
};

// Route handler using the promise
public_users.get('/isbn/:isbn', function (req, res) {
  const isbn = req.params.isbn;

  // Call the function to get book details based on ISBN
  getBookDetails(isbn)
    .then((filtered_books) => {
      res.send(filtered_books);
    })
    .catch((error) => {
      console.error('Error getting book details:', error);
      res.status(500).json({ message: 'Failed to get book details' });
    });
});

/*
// Get book details based on author
public_users.get('/author/:author', function (req, res) {
  //Write your code here
  //return res.status(300).json({ message: "Yet to be implemented" });
  const author = req.params.author;
  let booksArray = Object.values(books);
  let filtered_books = booksArray.filter((book) => book.author === author);
  res.send(filtered_books);
});
*/
// Wrap the logic in a promise
const getBooksByAuthor = (author) => {
  return new Promise((resolve, reject) => {
    try {
      const booksArray = Object.values(books);
      const filtered_books = booksArray.filter((book) => book.author === author);
      resolve(filtered_books);
    } catch (error) {
      reject(error);
    }
  });
};

// Route handler using the promise
public_users.get('/author/:author', function (req, res) {
  const author = req.params.author;

  // Call the function to get book details based on the author
  getBooksByAuthor(author)
    .then((filtered_books) => {
      res.send(filtered_books);
    })
    .catch((error) => {
      console.error('Error getting book details by author:', error);
      res.status(500).json({ message: 'Failed to get book details by author' });
    });
});

/*
// Get all books based on title
public_users.get('/title/:title', function (req, res) {
  //Write your code here
  //return res.status(300).json({ message: "Yet to be implemented" });
  const title = req.params.title;
  let booksArray = Object.values(books);
  let filtered_books = booksArray.filter((book) => book.title === title);
  res.send(filtered_books);
});
*/
// Wrap the logic in a function using async-await
const getBooksByTitle = async (title) => {
  try {
    const booksArray = Object.values(books);
    const filtered_books = booksArray.filter((book) => book.title === title);
    return filtered_books;
  } catch (error) {
    throw new Error('Failed to get book details by title');
  }
};

// Route handler using async-await
public_users.get('/title/:title', async function (req, res) {
  const title = req.params.title;

  try {
    // Call the function to get book details based on the title
    const filtered_books = await getBooksByTitle(title);
    res.send(filtered_books);
  } catch (error) {
    console.error('Error getting book details by title:', error);
    res.status(500).json({ message: 'Failed to get book details by title' });
  }
});

//  Get book review
public_users.get('/review/:isbn', function (req, res) {
  //Write your code here
  //return res.status(300).json({ message: "Yet to be implemented" });
  const isbn = req.params.isbn;
  let booksArray = Object.values(books);
  let filtered_books = booksArray.filter((book) => book.isbn === isbn);
  res.send(filtered_books[0].reviews);
});

module.exports.general = public_users;
