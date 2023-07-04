let time = null
let n = 0
document.querySelector('.showTime').innerHTML = format(new Date())
time = setInterval(() => {
    document.querySelector('.showTime').innerHTML = format(new Date())
}, 1000);

function format(time) {
    const dt = new Date(time)
    const year = dt.getFullYear()
    const month = padZero(dt.getMonth() + 1)
    const day = padZero(dt.getDate())
    const hour = padZero(dt.getHours())
    const minute = padZero(dt.getMinutes())
    const second = padZero(dt.getSeconds())
    let date = dt.getDay()
    switch (date) {
        case 0:
            date = 'Sun'
            break;
        case 1:
            date = 'Mon'
            break;
        case 2:
            date = 'Tues'
            break;
        case 3:
            date = 'Wed'
            break;
        case 4:
            date = 'Thur'
            break;
        case 5:
            date = 'Fri'
            break;
        case 6:
            date = 'Sat'
            break;
    }
    return `${year}-${month}-${day} ${hour}:${minute}:${second} ${date}`
}

function padZero(n) {
    return n > 9 ? n : '0' + n
}