let startBtn = document.getElementById("startBtn");
let welcome = document.getElementById("welcome");
let mainPage = document.getElementById("mainPage");

startBtn.onclick = function () {
    welcome.style.display = "none";
    mainPage.style.display = "block";
};

let form = document.getElementById("orderForm");
let history = document.getElementById("history");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let food = document.getElementById("food").value;
    let qty = document.getElementById("qty").value;

    let div = document.createElement("div");
    div.classList.add("record");

    div.innerHTML = `
        <h3>Name: ${name}</h3>
        <p>Food: ${food}</p>
        <p>Quantity: ${qty}</p>
    `;

    history.appendChild(div);
    alert("Order Placed Successfully!");
    form.reset();
});