function getCurrentDay() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    return currentDay;
}

function getCurrentUTCTime() {
    const currentDate = new Date();
    const utcTime = currentDate.toUTCString();
    return utcTime;
}


document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day of the Week: ${getCurrentDay()}`;
document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${getCurrentUTCTime()}`;