const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username) => { //returns boolean
  //write code to check is the username is valid
  let userswithsamename = users.filter((user) => {
    return user.username === username
  });
  if (userswithsamename.length > 0) {
    return true;
  } else {
    return false;
  }
}

const authenticatedUser = (username, password) => { //returns boolean
  //write code to check if username and password match the one we have in records.
  let validusers = users.filter((user) => {
    return (user.username === username && user.password === password)
  });
  if (validusers.length > 0) {
    return true;
  } else {
    return false;
  }
}

//only registered users can login
regd_users.post("/login", (req, res) => {
  //Write your code here
  // return res.status(300).json({ message: "Yet to be implemented" });
  const { username, password } = req.body; // Use req.body to access username and password

  if (!username || !password) {
    return res.status(400).json({ message: "Error logging in: Username and password are required" }); // Changed status code to 400 for bad request
  }

  if (authenticatedUser(username, password)) {
    let accessToken = jwt.sign({
      data: password
    }, 'access', { expiresIn: 60 * 60 });

    req.session.authorization = {
      accessToken, username
    }
    return res.status(200).send("User successfully logged in");
  } else {
    return res.status(401).json({ message: "Invalid Login: Check username and password" }); // Changed status code to 401 for unauthorized
  }
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
  //return res.status(300).json({ message: "Yet to be implemented" });
  const isbn = req.params.isbn;
  const username = req.session.authorization.username; // Assuming username is stored in the session

  const review = req.body.review; // Assuming the review is sent in the request body

  if (!isbn || !review) {
    return res.status(400).json({ message: "ISBN and review are required" });
  }

  // Find the book with the specified ISBN
  const book = Object.values(books).find(book => book.isbn === isbn);

  // Check if the book was found
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  // Add or update the review for the specified ISBN and username
  if (!book.reviews) {
    book.reviews = {}; // Initialize reviews object if it doesn't exist
  }
  book.reviews[username] = review;

  return res.status(200).json({ message: "Review added successfully" });
});

//only registered users can delete
regd_users.delete("/auth/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const username = req.session.authorization.username; // Assuming username is stored in the session

  if (!isbn) {
    return res.status(400).json({ message: "ISBN is required" });
  }

  // Find the book with the specified ISBN
  const book = Object.values(books).find(book => book.isbn === isbn);

  // Check if the book was found
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  // Check if the book has reviews
  if (!book.reviews) {
    return res.status(404).json({ message: "No reviews found for this book" });
  }

  // Check if the user has a review for this book
  if (!book.reviews[username]) {
    return res.status(404).json({ message: "No review found for this user and book" });
  }

  // Delete the review for the specified ISBN and username
  delete book.reviews[username];

  return res.status(200).json({ message: "Review deleted successfully" });
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
