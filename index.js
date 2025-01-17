let currentIndex = 1; // Śledzi obecny div

document.addEventListener("click", () => {
    function count() {
        if(currentIndex < 3){
        const current = document.getElementById("hello" + currentIndex);
        const next = document.getElementById("hello" + (currentIndex + 1));
        // Ukrycie obecnego diva
        if (current) {
            current.style.display = "none"; // Ukryj obecny div
        }

        // Pokaż następny div, jeśli istnieje
        if (next) {
            next.style.display = "block"; // Pokaż następny div
            if(currentIndex == 1){
            animateTimeSince(next, "2023-12-23", 2000); // Rozpocznij animację
        }
            currentIndex++; // Zwiększ index po kliknięciu
        }

        // Dodatkowa kontrola, gdy już osiągniemy trzeci div
    }
}
    count();
    
});
function binarySearch(){
    let levels = [];
}
function animateTimeSince(obj, startDate, duration) {
    const ourFirstDay = new Date(startDate); // Data początkowa
    let startTimestamp = null;

    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;

        // Postęp animacji
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

        // Animowana różnica czasu
        const currentDate = new Date(ourFirstDay.getTime() + (Date.now() - ourFirstDay.getTime()) * progress);
        
        // Obliczenie różnicy czasu
        let years = currentDate.getFullYear() - ourFirstDay.getFullYear();
        let months = currentDate.getMonth() - ourFirstDay.getMonth();
        let days = currentDate.getDate() - ourFirstDay.getDate();

        // Korekty dla ujemnych wartości
        if (days < 0) {
            const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
            days += prevMonth.getDate();
            months--;
        }
        if (months < 0) {
            months += 12;
            years--;
        }

        // Obliczenie pozostałych jednostek
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();

        // Wyświetlenie wyniku
        obj.innerHTML = `<h1>To już: <div class="black">${years} rok </div> <div class="black">${months}miesięcy </div>  <div class="black">${days} dni </div> <div class="black">${hours} godzin </div>  <div class="black">${minutes} minut </div> <div class="black">${seconds} sekund</div> <p>od ${startDate}! i każdy dzień na nowo mi pokazywał co to miłość hshsh</p></h1>`;

        // Kontynuuj animację
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
}