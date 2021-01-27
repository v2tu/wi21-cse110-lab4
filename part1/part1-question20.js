function getCurrTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(getCurrTime, 1000);
