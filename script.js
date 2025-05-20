
document.getElementById("magicBtn").addEventListener("click", function() {
    document.getElementById("responseText").textContent = "Button clicked! 🎉";
});

document.getElementById("hoverBox").addEventListener("mouseover", function() {
    this.style.background = "lightgreen";
});
document.getElementById("hoverBox").addEventListener("mouseout", function() {
    this.style.background = "lightblue";
});

document.getElementById("keyInput").addEventListener("keydown", function(event) {
    console.log("Key pressed:", event.key);
});

document.getElementById("secretZone").addEventListener("dblclick", function() {
    alert("🎉 Secret Unlocked!");
});

// Image gallery
const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150/0000FF",
    "https://via.placeholder.com/150/FF0000"
];
let currentIndex = 0;
document.getElementById("nextImage").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("imgDisplay").src = images[currentIndex];
});

// Form Validation
document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    let message = "";
    if (!name || !email || !password) {
        message = "All fields are required.";
    } else if (!email.includes("@") || !email.includes(".")) {
        message = "Invalid email format.";
    } else if (password.length < 8) {
        message = "Password must be at least 8 characters.";
    } else {
        message = "Form submitted successfully! 🎉";
    }
    document.getElementById("formMsg").textContent = message;
});
