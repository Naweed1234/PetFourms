document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".form-control.me-2");
  const searchButton = document.querySelector("#search-button");
  const Fish = document.querySelector(".card:nth-child(1)");
  const Cat = document.querySelector(".card:nth-child(2)");
  const Dog = document.querySelector(".card:nth-child(3)");
  // Add an event listener to the button to capture the user's input
  searchButton.addEventListener("click", function () {
    const userSearch = searchInput.value;
  });

  searchButton.addEventListener("click", function () {
    const userSearch = searchInput.value;
  });
});
