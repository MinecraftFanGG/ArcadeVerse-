const correctPassword = "Dream_GamePro";

let attempts = 3;
let accessGranted = false;

while (attempts > 0) {
    const enteredPassword = prompt(`Enter the password (${attempts} attempt(s) left):`);

    if (enteredPassword === correctPassword) {
        accessGranted = true;
        break;
    }

    attempts--;

    if (attempts > 0) {
        alert("Wrong password! Try again.");
    }
}

if (accessGranted) {
    document.body.style.display = "block";
} else {
    alert("ACCESS DENIED");
    window.location.replace("https://www.google.com");
}

const PRINT_PASSWORD = "Dream_GamePro";

function securePrint() {
    const password = prompt("Enter the print password:");

    if (password === PRINT_PASSWORD) {
        alert("Password correct! Opening print dialog...");
        window.print();
    } else {
        alert("Printing is disabled.");
    }
}

document.addEventListener("keydown", function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "p") {
        event.preventDefault();
        alert("Printing is disabled.");
    }
});

window.onbeforeprint = function () {
  alert("Printing is disabled.");
};