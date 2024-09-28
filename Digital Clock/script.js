
function updateClock(){
    const now = new Date();
    let hr = now.getHours();
    const min = now.getMinutes().toString().padStart(2,0);
    const sec = now.getSeconds().toString().padStart(2,0);

    const meridium = hr >=12 ? "PM" : "AM";
    hr = hr % 12 || 12;
    hr = hr.toString().padStart(2,0);
    const timeString = `${hr} : ${min} : ${sec} ${meridium}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();

setInterval(updateClock,1000);