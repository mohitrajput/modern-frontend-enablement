const timeDiv = document.querySelectorAll("#countdown .time h2");
const loading = document.querySelector("#loading");
const countdownDiv = document.querySelector("#countdown");
const yearText = document.querySelector("#year");
// console.log(timeDiv);

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2023, 11, 31, 23, 59, 59);
let futureDate = new Date(tempYear, tempMonth + 1, 31, 23, 59, 59);
// console.log("templyear", futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
let weekDay = futureDate.getDay();

// future time in miliseconds
const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime(){
    loading.setAttribute("style", "display:none;");
    countdownDiv.setAttribute("style", "display: flex;")
    yearText.textContent = year + 1;
    const today = new Date().getTime();
    // console.log(today);
    const t = futureTime - today;
    // console.log(t);
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60min
    // 1d = 24hr
    
    // values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculate all values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // set values
    const values = [days, hours, minutes, seconds];
    
    function format(item){
        if(item < 10){
            return item = `0${item}`
        }
        return item;
    }
    
    timeDiv.forEach(function(item, index){
        item.innerHTML = format(values[index]);
    })
    if(t < 0){
        clearInterval(countdown);
    }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);


getRemainingTime();
