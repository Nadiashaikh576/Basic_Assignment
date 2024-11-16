document.addEventListener('DOMContentLoaded', function() {
    const calendarData = {
        "January": ["New Year's Day"],
        "February": ["Kashmir Day"],
        "March": ["Pakistan Day"],
        "May": ["Labour Day"],
        "July": ["July 1 Bank Holiday"],
        "August": ["Independence Day"],
        "September": ["Defence Day"],
        "November": ["Iqbal Day"]
    };

    const container = document.getElementById('calendarHighlights');
    Object.entries(calendarData).forEach(([month, events]) => {
        const monthDiv = document.createElement('div');
        monthDiv.innerHTML = `<h2>${month}</h2>`;
        events.forEach(event => {
            const eventP = document.createElement('p');
            eventP.textContent = event;
            monthDiv.appendChild(eventP);
        });
        container.appendChild(monthDiv);
    });
});
