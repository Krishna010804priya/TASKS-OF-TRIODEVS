document.getElementById("mainButton").addEventListener("click", function() {
    createButtons();
    this.disabled = true; // Disable main button after generating buttons
});

function createButtons() {
    var container = document.createElement("div");
    container.id = "buttonContainer";
    document.body.appendChild(container);

    for (var i = 1; i <= 100; i++) {
        var button = document.createElement("button");
        button.textContent = "Button No: " + i;
        button.className = "button";
        button.setAttribute("data-color", "white"); // Set initial color state
        button.addEventListener("click", function() {
            toggleColor(this);
        });
        container.appendChild(button);
    }
}

function toggleColor(button) {
    var currentColor = button.getAttribute("data-color");
    if (currentColor === "white") {
        button.style.backgroundColor = "red"; // Change to red color
        button.setAttribute("data-color", "red"); // Update data-color attribute
    } else {
        button.style.backgroundColor = "white";
        button.setAttribute("data-color", "white");
    }
}

