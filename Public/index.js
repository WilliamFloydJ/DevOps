const button = document.querySelector("button");

button.addEventListener("click", () => {
  axios.get("/create").then();
});
