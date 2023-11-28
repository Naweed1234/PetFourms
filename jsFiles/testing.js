// GET Request
fetch("https://rhymebrain.com/talk?function=getRhymes&word=hello")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.error("There was a problem with the fetch operation:", error);
  });
