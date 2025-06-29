  const botaoAbrirModal = document.getElementById("btn-sinopse");
  const modal = document.getElementById("modal-sinopse");
  const botaoFecharModal = document.getElementById("fechar-modal");

  function abrirModal() {
    modal.classList.remove("hidden");
    modal.classList.add("aberto");
    document.body.classList.add("modal-aberto"); // bloqueia rolagem
  }

  function fecharModal() {
    modal.classList.add("hidden");
      modal.classList.remove("aberto");
    document.body.classList.remove("modal-aberto"); // libera rolagem
  }

  botaoAbrirModal.addEventListener("click", abrirModal);
  botaoFecharModal.addEventListener("click", fecharModal);

  modal.addEventListener("click", (evento) => {
    if (evento.target === modal) {
      fecharModal();
    }
  });