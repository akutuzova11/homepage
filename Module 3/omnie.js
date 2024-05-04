let button = document.querySelector(".js-button");
let view = document.querySelector(".js-view");

button.addEventListener("click", function () {
    if (view.style.display === "none" || !view.style.display) {
        view.style.display = "block";
        button.textContent = "Wyświetl mniej ↑";
    } else {
        view.style.display = "none";
        button.textContent = "Wyświetl więcej ↓";
    }
});
