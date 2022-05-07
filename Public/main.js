const button = document.querySelector("button");
console.log(button);
console.log("working");

const input = document.querySelector("input");

button.addEventListener("click", () => {
  axios
    .post("/api/create", { name: input.value })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
});
