const heart = document.querySelector(".heart-beat");

setInterval(() => {
  heart.classList.add("pulse");
  setTimeout(() => heart.classList.remove("pulse"), 500);
}, 1000);
