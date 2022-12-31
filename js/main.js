const elForm = document.querySelector(".js-form");
const elList = document.querySelector(".list");
const elInput = document.querySelector(".js-input");
const elRecommend = document.querySelector(".recommend");

const renderFilm = (array, node) => {
  node.innerHTML = [];
  array.forEach((element) => {
    let newLi = document.createElement("li");

    let newLiImg = document.createElement("img");
    let newLiYear = document.createElement("p");
    let newLiItem = document.createElement("li");
    let newLiItem2 = document.createElement("li");

    newLiImg.src = element.Poster;
    newLiItem.innerHTML = `<strong>${element.Title}</strong>`;
    newLiYear.textContent = element.Year;
    newLiItem2.innerHTML = `<a href='https://google.com'>Link movie</a>`;

    newLi.setAttribute(
      "class",
      "border border-1 w-25 mx-auto mt-5 p-3 rounded mb-3 text-center"
    );
    newLiYear.setAttribute("class", "p-3 bg-light w-25 mt-2 rounded mx-auto");
    newLiImg.setAttribute("class", "rounded mb-3");

    newLi.appendChild(newLiItem);
    newLi.appendChild(newLiYear);
    newLi.appendChild(newLiImg);
    newLi.appendChild(newLiItem2);

    node.appendChild(newLi);
  });
};

//* Listen to, if the user submits
elForm.addEventListener("input", (evt) => {
  evt.preventDefault();
  //* Fetch,GET all the results from the omd
  fetch(`http://www.omdbapi.com/?apikey=bb225d33&s=${elInput.value}`).then(
    (response) => {
      response.json().then((data) => {
        if (data) {
          elRecommend.classList.add("recommend-d");
          renderFilm(data.Search, elList);
          // Search with Search att, then append to elList
        }
      });
    }
  );
});

// CRUD SYSTEM => CreateReadUpdateDelete
// PostGetPutPatchDelete
