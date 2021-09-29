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
let cardNode = document.getElementById("card");
let removeElem = document.getElementById("remove");
//the library array
let Library = [];

function addBook(book) {
  Library.push(book);
  console.log("success");
  console.log(Library);
}
function removeBook(book, index) {
  console.log(Library.length, index);
  if (Library.length != index + 1) {
    Library.splice(index, index + 1);
    console.log(Library);
    updateBookDivs();
  } else if (Library.length == index + 1) {
    Library.pop();
    updateBookDivs();
  }
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

//Submit Function
submitBookElem.onclick = function () {
  event.preventDefault();
  let title = bookNameField.value;
  let author = authorNameField.value;
  let pages = numOfPagesField.value;
  let status = statusField.value;
  let newBook = new Book(title, author, pages, status);
  addBook(newBook);
  updateBookDivs();
  modal.style.display = "none";
  bookNameField.value = "";
  authorNameField.value = "";
  numOfPagesField.value = 0;
};

function updateBookDivs() {
  clearBookGrid();
  for (let i = 0; i < Library.length; i++) {
    console.log("this is lib", Library[i]);
    createBookCard(Library[i], i);
  }
}

const clearBookGrid = () => {
  cardNode.innerHTML = "";
};
// make cards for each item in library
const createBookCard = (book, index) => {
  const bookCard = document.createElement("div");
  const bookName = document.createElement("h3");
  const bookAuthor = document.createElement("h3");
  const pages = document.createElement("h3");
  const doneStatus = document.createElement("button");
  const removeButton = document.createElement("button");

  // adding text content to cards
  bookName.textContent = "Book Name: " + `${book.name}`;
  bookAuthor.textContent = "Book Author: " + book.author;
  pages.textContent = "Total Pages: " + `${book.pages} pages `;
  doneStatus.textContent = "Finished";
  removeButton.textContent = "Remove";

  //class adds to parts of card
  bookName.className = "book-title";
  bookCard.className = "book-container";
  removeButton.setAttribute("id", "remove");
  doneStatus.setAttribute("id", "readStatus");

  bookCard.appendChild(bookName);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(pages);
  bookCard.appendChild(doneStatus);
  bookCard.appendChild(removeButton);
  cardNode.appendChild(bookCard);
  console.log(book, index);

  if (Library[index].status == "True") {
    bookCard.style.backgroundColor = "green";
    console.log("complete color change");
  } else if (Library[index].status == "False") {
    bookCard.style.backgroundColor = "lightgray";
  }

  removeButton.addEventListener("click", () => {
    removeBook(book, index);
  });
  doneStatus.addEventListener("click", () => {
    if (Library[index].status == "True") {
      Library[index].status = "False";
      console.log("now false");
      doneStatus.textContent = "Not Read";
      if (Library[index].status == "True") {
        bookCard.style.backgroundColor = "green";
        console.log("complete color change");
      } else if (Library[index].status == "False") {
        bookCard.style.backgroundColor = "lightgray";
      }
    } else {
      Library[index].status = "True";
      console.log("this just got done");
      doneStatus.textContent = "Read";
      if (Library[index].status == "True") {
        bookCard.style.backgroundColor = "green";

        console.log("complete color change");
      } else if (Library[index].status == "False") {
        bookCard.style.backgroundColor = "lightgray";
      }
    }
  });
};

// Testing Script
const newBook = new Book("Think and Grow Rich", "Napoleon Hil", "238", "True");
addBook(newBook);
console.log(typeof newBook2);
updateBookDivs();
console.log("this is the book status", Library[0].status);
//Lib.addBook(newBook2);
