fetch("https://striveschool-api.herokuapp.com/books", {})
  .then((response) => {
    console.log(response);
    if (response.ok) {
      console.log("la fetch è fetchata");
      return response.json();
    } else {
      console.log("la fetch NON è fetchata");
      throw new Error();
    }
  })
  .then((booksArray) => {
    console.log(booksArray);
    const div = document.getElementById("booklist");
    booksArray.forEach((book) => {
      const newCol = document.createElement("div");
      newCol.classList.add("col-4");
      const newCard = document.createElement("div");
      newCard.classList.add("card");
      newCard.innerText = book.asin + " - " + book.title;
      div.appendChild(newCol);
      div.appendChild(newCard);
    });
  })
  .catch((error) => {
    console.log("errore di chiamata");
  });
