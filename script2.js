const openBtn = document.getElementById("openBtn");
const card = document.getElementById("card");
const envelope = document.getElementById("envelope");
const heartsContainer = document.getElementById("heartsContainer");

openBtn.addEventListener("click", () => {
  envelope.classList.add("open");
  card.classList.add("opened");

  // cria corações flutuantes
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart-float");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 2 + Math.random() * 2.5 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }

  // redireciona após 4 segundos
  setTimeout(() => {
    window.location.href = "page2.html";
  }, 2000);
});
