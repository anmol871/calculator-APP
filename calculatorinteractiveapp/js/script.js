let display = document.getElementById("display");

function appendValue(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === "") display.innerText = "0";
}

function calculate() {
    try {
        let expression = display.innerText.replace(/(\d+)%/g, '(($1/100))');
        let result = eval(expression);

        // Displaying the full expression along with the result
        display.innerText = `${display.innerText}=${result}`;
    } catch {
        display.innerText = "Error";
    }
}

function closeApp() {
    document.body.innerHTML = "<h1 style='color:white; font-size:2em;'>Thank you for using this calculator app!</h1>";
}
