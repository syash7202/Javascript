const endDate = "12 October 2023 12:00 AM";
document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");

const clock = () => {
  const end = new Date(endDate); // endDate converted into milliseconds
  const current = new Date(); // current date

  const diff = (end - current) / 1000; // conversion to seconds
  console.log(diff);

  if (diff < 0) {
    document.getElementById("t1").innerText = "Countdown End";
    return;
  }

  // coverting the seconds into days, hours, minutes

  inputs[0].value = Math.floor(diff / 24 / 60 / 60);
  inputs[1].value = Math.floor((diff / 60 / 60) % 24); // rmaining hours from diff and days
  inputs[2].value = Math.floor((diff / 60) % 60);
  inputs[3].value = Math.floor(diff % 60);
};

clock();
setInterval(() => {
  clock();
}, 1000);
