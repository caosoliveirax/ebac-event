AOS.init();

const eventDate = new Date("Dec 12, 2025 19:00:00");
const eventTimeStamp = eventDate.getTime();

const countHours = setInterval(function() {
    const now = new Date();
    const currentTimeStamp = now.getTime();

    const distanceToEvent = eventTimeStamp - currentTimeStamp;

    const dayInMs = 1000 * 60 * 60 * 24;
    const hourInMs = 1000 * 60 * 60;
    const minuteInMs = 1000 * 60;

    const daysToEvent = Math.floor(distanceToEvent / dayInMs);
    const hoursToEvent = Math.floor((distanceToEvent % dayInMs) / hourInMs);
    const minutesToEvent = Math.floor((distanceToEvent % hourInMs) / minuteInMs);
    const secondsToEvent = Math.floor((distanceToEvent % minuteInMs) / 1000);

    document.getElementById('counter').innerHTML = 
    `${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s`

    if (distanceToEvent < 0 ) {
        clearInterval(countHours);
        document.getElementById('counter').innerHTML = 
    `Evento expirado`
    }
}, 1000);