var button = document.getElementById('introButton');
var scheduleChoice = document.getElementById('schedule');
var schedule = JSON.parse(localStorage.getItem('SETTINGS')).schedule;
scheduleChoice.value = schedule;

button.addEventListener('click', setSchedule);

function setSchedule(){
    sch = JSON.stringify({schedule: scheduleChoice.value});
    localStorage.setItem('SETTINGS', sch);
    window.location.href='intro.html'
}