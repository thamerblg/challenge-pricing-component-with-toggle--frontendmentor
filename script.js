let annuallyContent = document.querySelectorAll(".annually-price");
let monthlyContent = document.querySelectorAll(".monthly-price");

document.querySelector(".switch input").addEventListener("change", (e) => {
  for (var i = 0; i < 3; i += 1) {
    annuallyContent[i].style.display = e.target.checked ? "none" : "flex";
    monthlyContent[i].style.display = e.target.checked ? "flex" : "none";
  }
});
