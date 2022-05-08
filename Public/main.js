const button = document.querySelector("button");

console.log("working");

const input = document.querySelector("input");

button.addEventListener("click", () => {
  axios
    .post("/api/create", { name: input.value })
    .then((res) => {
      console.log(res.data);
      console.log(input.value.charAt(0));
    })
    .catch((err) => {
      console.log(err);
    });
});
