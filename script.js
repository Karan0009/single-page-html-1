window.onload = () => {
  let toDate = new Date(2020, 5, 14);
  countDown(toDate);
};

// function for countdown in header
function countDown(targetDate) {
  let tempDate = targetDate;
  let TargetDate = targetDate.getTime();
  let today = new Date().getTime();
  let dif = TargetDate - today;

  const milliSecsInOneHour = 60 * 60 * 1000;
  const milliSecsInOneDay = 24 * 60 * 60 * 1000;

  let days = document.getElementById("days");
  let hours = document.getElementById("hours");
  let mins = document.getElementById("mins");
  let secs = document.getElementById("secs");

  days.innerHTML = Math.floor(dif / milliSecsInOneDay);
  hours.innerHTML = Math.floor((dif % milliSecsInOneDay) / milliSecsInOneHour);
  mins.innerHTML = Math.floor(
    ((dif % milliSecsInOneDay) % milliSecsInOneHour) / (60 * 1000)
  );
  secs.innerHTML = Math.floor(
    (((dif % milliSecsInOneDay) % milliSecsInOneHour) % (60 * 1000)) / 1000
  );

  const timeout = setTimeout(() => {
    countDown(tempDate);
  }, 1000);
}
