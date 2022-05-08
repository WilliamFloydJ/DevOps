const req = require("express/lib/request");

const button = document.querySelector("button");
const warning = document.querySelector("#warning");
console.log("working");
console.log(warning);
const input = document.querySelector("input");

button.addEventListener("click", () => {
  axios
    .post("/api/create", { name: input.value })
    .then((res) => {
      warning.textContent = res.body;
    })
    .catch((err) => {
      console.log(err);
      warning.textContent = res.body;
    });
});
