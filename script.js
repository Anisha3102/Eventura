const createEvent = document.querySelector('#button1');
const form = document.querySelector('#first-page');
const body = document.querySelector('body');
const next = document.querySelector('#next-page');
const box = document.querySelector('.dialog-box');

createEvent.addEventListener('click', (event) => {

    const ename = document.getElementById('ename').value;
    const edate = document.getElementById('edate').value;
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;
    const description = document.getElementById('description').value;
    const location = document.getElementById('location').value;

    const nameDisplay = document.getElementById('event-name-display')
    const dateDisplay = document.getElementById('event-date-display')
    const timeDisplay = document.getElementById('event-time-display')
    const locationDisplay = document.getElementById('event-location-display')
    const descriptionDisplay = document.getElementById('event-description-display')

    event.preventDefault();

    if (!ename || !edate || !startTime || !endTime || !description || !location) {
        box.style.display = 'flex';
    } else {
        nameDisplay.innerText = `${ename}`;
        dateDisplay.innerText = `${edate}`;
        timeDisplay.innerText = `${startTime} - ${endTime}`;
        locationDisplay.innerText = `${location}`;
        descriptionDisplay.innerText = `${description}`;
        form.style.display = 'none';
        body.style.background = 'white';
        next.style.display = 'flex';
    }
})

const closeDialogButton = document.querySelector('.dialog-box button');
closeDialogButton.addEventListener('click', () => {
    box.style.display = 'none';
});