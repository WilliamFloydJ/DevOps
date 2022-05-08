const button = document.querySelector("button");
const warning = document.querySelector("#warning");
console.log("working");
console.log(warning);
const Uname = document.querySelector("#name");
const Pword = document.querySelector("#pass");
button.addEventListener("click", () => {
  axios
    .post("/api/create", { name: Uname.value, password: Pword.value })
    .then((res) => {
      warning.textContent = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});
