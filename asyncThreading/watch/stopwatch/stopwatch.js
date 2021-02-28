
//  let secondCount = 0;
 
//  let stopWatch;
 
//  const displayPara = document.querySelector('.clock');

//  function displayCount() {
//    let hours = Math.floor(secondCount/3600);
//    let minutes = Math.floor((secondCount % 3600)/60);
//    let seconds = Math.floor(secondCount % 60)

//    // Display a leading zero if the values are less than ten
//    let displayHours = (hours < 10) ? '0' + hours : hours;
//    let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
//    let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;

//    // Write the current stopwatch display time into the display paragraph
//    displayPara.textContent = displayHours + ':' + displayMinutes + ':' + displaySeconds;

//    // Increment the second counter by one
//    secondCount++;
//  }

//  // Store references to the buttons in constants
//  const startBtn = document.querySelector('.start');
//  const stopBtn = document.querySelector('.stop');
//  const resetBtn = document.querySelector('.reset');

//  // When the start button is pressed, start running displayCount() once per second using setInterval()
//  startBtn.addEventListener('click', () => {
//    stopWatch = setInterval(displayCount, 1000);
//    startBtn.disabled = true;
//  });

//  // When the stop button is pressed, clear the interval to stop the count.
//  stopBtn.addEventListener('click', () => {
//    clearInterval(stopWatch);
//    startBtn.disabled = false;
//  });

//  // When the reset button is pressed, set the counter back to zero, then immediately update the display
//  resetBtn.addEventListener('click', () => {
//    clearInterval(stopWatch);
//    startBtn.disabled = false;
//    secondCount = 0;
//    displayCount();
//  });

//  // Run displayCount() once as soon as the page loads so the clock is displayed
//  displayCount();
let stop
function display(){
    let date = new Date()
    let time = date.toLocaleTimeString()
    document.querySelector('.clock').textContent = time
}
document.querySelector('.start').addEventListener('click',()=>{
    stop=setInterval(display, 1000);
    document.querySelector('.start').disabled = true
})
document.querySelector('.stop').addEventListener('click',()=>{
  clearInterval(stop)
  document.querySelector('.start').disabled = false
})
document.querySelector('.reset').addEventListener('click',()=>{
    clearInterval(stop)
    document.querySelector('.clock').textContent = "00:00:00"
    document.querySelector('.start').disabled = false
})

