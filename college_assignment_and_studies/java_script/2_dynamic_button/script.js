const button = document.querySelector('.class1');

alert("Note the color change")

button.addEventListener("mouseenter", function () {
    button.style.backgroundColor = "orange";
})

button.addEventListener("mouseleave", function () {
    button.style.backgroundColor = "lightblue";
});
