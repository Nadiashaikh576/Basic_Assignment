// Countdown Function
function updateCountdown() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const nextDefenceDay = new Date(`September 6, ${currentYear + 1}`);
    
    const timeDiff = nextDefenceDay - today;
    
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `
        <h3>Countdown to Next Defence Day</h3>
        <p>${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds</p>
    `;
}

// Initial call to set the countdown
updateCountdown();

// Update countdown every second
setInterval(updateCountdown, 1000);