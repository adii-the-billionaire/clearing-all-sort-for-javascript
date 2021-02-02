function displayTime(){
    const date = new Date()
    const time = date.toLocaleTimeString()
    document.querySelector('.clock').textContent = time
}
setInterval(displayTime, 1000);