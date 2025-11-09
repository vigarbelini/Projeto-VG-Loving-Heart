// ---------- Configurações ----------
history.replaceState(null, '', location.pathname + location.search);

const botaoA = document.getElementById("ativar"); // botão que leva até o outro
const botaoB = document.getElementById("versite"); // botão que vai brilhar

botaoA.addEventListener("click", (e) => {
  e.preventDefault(); // evita comportamento padrão se tiver href

  // Rola suavemente até o botão B
  botaoB.scrollIntoView({ behavior: "smooth", block: "center" });

  // Adiciona brilho ao botão B
  botaoB.classList.remove("highlight"); // reseta a classe
  void botaoB.offsetWidth;               // força reinício da animação
  botaoB.classList.add("highlight");

  // Remove o brilho depois da animação
  setTimeout(() => botaoB.classList.remove("highlight"), 3000);
});


// fechar com ESC
document.addEventListener("keydown", e => { if(e.key === "Escape") closePreview(); });

// fechar clicando no fundo
modal.addEventListener("click", ev => { if(ev.target === modal) closePreview(); });

// botão fixo WhatsApp
document.getElementById("wa-fix").addEventListener("click", e => {
  e.preventDefault();
  buyNow();
});

