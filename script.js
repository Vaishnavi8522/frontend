function updateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();
    dateTimeElement.textContent = now.toLocaleString();
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call
updateTime();
