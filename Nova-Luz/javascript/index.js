document.addEventListener("DOMContentLoaded", function () {
    const itens = document.querySelectorAll(".lista-itens li");
    const descricoes = document.querySelectorAll(".desc-item");

    function primeiroItem(index) {
      itens.forEach(i => i.classList.remove("active"));
      descricoes.forEach(d => d.classList.remove("active"));

      itens[index].classList.add("active");
      const id = itens[index].getAttribute("data-id");
      document.getElementById(id).classList.add("active");
    }

primeiroItem(0);

itens.forEach((item, index) => {
        item.addEventListener("click", () => primeiroItem(index));
    });
});
