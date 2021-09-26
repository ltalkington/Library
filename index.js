"use strict";
//Elements
let buttonClickElem = document.getElementById("add-button");
let submitBookElem = document.getElementById("submitBook");
let modal = document.getElementById("myModal");
let bookNameField = document.getElementById("bookName");
let authorNameField = document.getElementById("autName");
let numOfPagesField = document.getElementById("pages");
let statusField = document.getElementById("status");
let span = document.getElementsByClassName("close")[0];
//the library array
let Library = [];

function addBook(book) {
  Library.push(book);
  console.log("success");
  console.log(Library);
}
function removeBook(book) {
  this.books.filter((book) => Library.title != book);
}

//Book constructor
class Book {
  constructor(name, author, pages, status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

//Modal functions
// When the user clicks on the button, open the modal
buttonClickElem.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
submitBookElem.onclick = function () {
  event.preventDefault();
  let title = bookNameField.value;
  let author = authorNameField.value;
  let pages = numOfPagesField.value;
  let status = statusField.value;
  let newBook = new Book(title, author, pages, status);
  addBook(newBook);
  modal.style.display = "none";
  bookNameField.value = "";
  authorNameField.value = "";
  numOfPagesField.value = 0;
};

//function for submitting a book

// make cards for each item in library

const newBook = new Book("bible", "jesus", "400", "done");
addBook(newBook);
const newBook2 = new Book("girls want girls", "drake ", "400", "done");
addBook(newBook2);
console.log(typeof newBook2);
//Lib.addBook(newBook2);
