document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const content = document.getElementById("content");

    // Poczekaj 3 sekundy, a następnie pokaż zawartość
    setTimeout(() => {
        loadingScreen.style.display = "none"; // Ukryj ekran ładowania
        content.classList.remove("hidden"); // Pokaż zawartość strony
        content.classList.add("fade-in"); // Dodaj animację pojawiania się
    }, 3000); // 3 sekundy
});