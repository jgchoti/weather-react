export default function formattedDate(date) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    let hours = date.getHours();
    if (hours < 10) { hours = "0" + hours }

    let minutes = date.getMinutes();
    if (minutes < 10) { minutes = "0" + minutes }
    return `${day} ${hours}:${minutes}`

}