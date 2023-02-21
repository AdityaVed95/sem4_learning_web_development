const button = document.querySelector("#colorButton");

button.addEventListener("mouseenter", function () {
    button.classList.add("mouseenter-style");
});

button.addEventListener("mouseleave", function () {
    button.classList.remove("mouseenter-style");
    button.classList.add("mouseleave-style");
});
