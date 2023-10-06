function updateClock() {
  var clockElement = document.getElementById('clock');
  var currentTime = new Date();

  var hours = currentTime.getHours().toString().padStart(2, '0');
  var minutes = currentTime.getMinutes().toString().padStart(2, '0');
  var seconds = currentTime.getSeconds().toString().padStart(2, '0');

  var timeString = hours + ":" + minutes + ":" + seconds;
  clockElement.textContent = timeString;
}


setInterval(updateClock, 1000);