let am_pm = "aa";
function updateTime() {
    const now = new Date();
    let hour = now.getHours();
    const minute = now.getMinutes().toString().padStart(2,0);
    const secend = now.getSeconds().toString().padStart(2,0);
    if (hour > 12)
    {
        am_pm = "pm";
        hour -= 12;
    }
    else if(hour <= 12){
        am_pm = "am";
    }

    const timeString = `${hour}:${minute}:${secend} ${am_pm}`;
    document.getElementById("Clock").textContent = timeString;

}
updateTime();
setInterval(updateTime, 1000);