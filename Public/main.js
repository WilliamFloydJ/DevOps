const button = document.querySelector("button");
const warning = document.querySelector("#warning");
console.log("working");
console.log(warning);
const input = document.querySelector("input");

button.addEventListener("click", () => {
  axios
    .post("/api/create", { name: input.value })
    .then(({ data: remark }) => {
      warning.textContent = remark;
      console.log(remark);
    })
    .catch((err) => {
      console.log(err);
    });
});
