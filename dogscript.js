document.addEventListener("DOMContentLoaded", function () {
  const apiButton = document.querySelector("#search-button");
  const searchInput = document.querySelector("#search-input");

  apiButton.addEventListener("click", function (event) {
    let searchText = searchInput.value;
    searchText = searchText.toLowerCase(); // Assign the lowercase value back to searchText

    fetch(`https://dog.ceo/api/breed/${searchText}/images/random`)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        const imageUrl = data.message;
        const newDiv = document.createElement("div");
        const newImg = document.createElement("img");

        newDiv.appendChild(newImg);
        newImg.src = imageUrl;

        // Append the new elements to an existing element with an ID of 'image-container'
        const imageContainer = document.getElementById("image-container");
        imageContainer.appendChild(newDiv);
      })
      .catch(function (error) {
        console.error("There was a problem with the fetch operation:", error);
      });
  });
});
