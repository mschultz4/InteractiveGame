var button = document.getElementById('introButton');
var scheduleChoice = document.getElementById('schedule');
var settings = localStorage.getItem('SETTINGS');
var schedule = settings ? JSON.parse().schedule : '';
scheduleChoice.value = schedule;

button.addEventListener('click', setSchedule);

function setSchedule(){
    sch = JSON.stringify({schedule: scheduleChoice.value});
    localStorage.setItem('SETTINGS', sch);
    window.location.href='intro.html'
}