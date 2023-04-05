function  getDate(){
    let d = new Date();
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let  months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];

    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    // if(date < 10){
    //     date = '0' + date;
    // }
    return `${day}-${month} ${date} ${year}  `

}

document.querySelector('.date').innerHTML = getDate();

function getTime(){
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    const ampm = h > 12 ? "PM" : "AM";
    h = h % 12 || 12;

    if(h < 10){
        h = '0' + h;
    }else{
        h = h;
    }

    if(m < 10){
        m = '0' + m;
    }else{
        m = m;
    }
    if(s < 10){
        s = '0' + s;
    }else{
        s=s;
    }
    const times = `${h}:${m}:${s} ${ampm}`;
    document.querySelector('.time').innerHTML = times;
}
setInterval(getTime , 1000);

