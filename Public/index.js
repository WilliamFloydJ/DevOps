const button = document.querySelector("button");
console.log(button);
console.log("working");

button.addEventListener("click", () => {
  axios.get("/create").then((res) => {
    console.log(res.data);
  });
});
