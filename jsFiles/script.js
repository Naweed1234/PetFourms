document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".form-control.me-2");
  const searchButton = document.querySelector("#search-button");
  const DogNameAndCommentForm = document.querySelector("#dogNameAndFourms");
  const FishNameAndCommentForm = document.querySelector("#FishNameAndFourms");
  const CatNameAndCommentForm = document.querySelector("#catNameAndFourms");

  searchButton.addEventListener("click", function () {
    const userSearch = searchInput.value;
    console.log(userSearch);
  });

  DogNameAndCommentForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    const dogName = document.getElementById("dogName").value;
    const comment = document.getElementById("comment").value;
    // window.location.href = "dogs.html";
    console.log("Dog's Name: ", dogName);
    console.log("Comment: ", comment);
  });

  FishNameAndCommentForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    const FishName = document.getElementById("FishName").value;
    const comment = document.getElementById("comment").value;
    // window.location.href = "fish.html";
    console.log(FishName);
    console.log("Comment: ", comment);
  });

  CatNameAndCommentForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    const catName = document.getElementById("catName").value;
    const comment = document.getElementById("comment").value;
    // window.location.href = "cats.html";
    console.log(catName);
    console.log("Comment: ", comment);
  });
});
