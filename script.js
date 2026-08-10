document.querySelectorAll("[data-scroll]").forEach((botao) => {
  botao.addEventListener("click", () => {
    const alvoId = botao.getAttribute("data-scroll");
    const alvo = document.getElementById(alvoId);
    if (alvo) {
      alvo.scrollIntoView({ behavior: "smooth" });
    }
  });
});