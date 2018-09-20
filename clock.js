const secondHand = document.getElementsByClassName('sec-hand')[0].style;
const minuteHand = document.getElementsByClassName('min-hand')[0].style;
const hourHand = document.getElementsByClassName('hr-hand')[0].style;

const clockDiv = document.getElementById('clock');

for (let i = 0; i < 12; i++) {
    const num = document.createElement('div');
    num.innerText = (i === 0) ? 12 : i;
    num.classList.add('num')
    num.style.transform ='rotate(' + i*30 + 'deg)';
    clockDiv.appendChild(num);
}


setInterval(() => {
    const date = new Date();
    let hrposition = (date.getHours() % 12) * 30 + (date.getMinutes()) * 0.5;
    console.log(date.getHours() + ': ' + date.getMinutes() + ' : ' + date.getSeconds());
    secondHand.transform = 'rotate(' + 6 * date.getSeconds() + 'deg)';
    minuteHand.transform = 'rotate(' + 6 * date.getMinutes() + 'deg)';
    hourHand.transform = 'rotate(' + hrposition + 'deg)';
}, 1000);

