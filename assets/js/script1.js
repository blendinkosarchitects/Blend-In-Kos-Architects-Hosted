const countdownDate = new Date("2025-01-01T00:00:00").getTime();  

const countdownFunction = setInterval(() => {  
    const now = new Date().getTime();  
    const distance = countdownDate - now;  
    
    if (distance < 0) {  
        clearInterval(countdownFunction);  
        document.getElementById("countdown").innerHTML = "<h2>We're live!</h2>";  
        return;
    }

    // Time calculations  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));  
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));  
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);  

    // Display with leading zeros
    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}, 1000);  

document.getElementById("subscribeForm")?.addEventListener("submit", (event) => {  
    event.preventDefault();  
    const email = event.target[0].value;  
    alert(`Thank you for subscribing! We'll notify you at ${email}`);  
    event.target.reset();
});