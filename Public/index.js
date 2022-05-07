const button = document.querySelector("button");

console.log("working");

button.addEventListener("click", () => {
  axios.get("/create").then();
});
