// @ts-nocheck
function updateBorder() {
  const thickness = inputs[0].value;
  const dashes = inputs[1].value;

  document.body.style.setProperty("--thickness", `${thickness}px`);
  document.body.style.setProperty("--dashes", dashes);
}

const inputs = [
  document.getElementById("thickness"),
  document.getElementById("dashes"),
];

inputs.forEach((input) => {
  input.addEventListener("input", updateBorder);
});

updateBorder();
