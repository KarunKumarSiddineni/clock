function updatetime(){

    const now = new Date();
    const hours = now.getHours();
    const meridian= hours>=12 ? "PM" : "AM"
    const minit = now.getMinutes();
    const sec = now.getSeconds();
    const time =`${hours}:${minit}:${sec}:${meridian}`;
    document.getElementById("clock").textContent = time;
}
updatetime();
setInterval(updatetime, 1000)