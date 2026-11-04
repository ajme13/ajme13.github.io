function dispararConfeti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      zIndex: 9999
    });
  }

  let btn_principal = document.getElementById("btn_principal")

  if(btn_principal){
    btn_principal.addEventListener("click", () =>{
      window.location.href = "mensaje_aleatorio.html"
    })
  }

  const cards = document.querySelectorAll('.polaroid-card');

    cards.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('flipped');
      });
    });


  function abrirVisorImagen(elemento) {
    const imgElemento = elemento.querySelector('img');
    const rutaImagen = imgElemento.src;
    const textoAlt = imgElemento.alt;

    document.getElementById('imagenModalExpandida').src = rutaImagen;

    const modalVisor = new bootstrap.Modal(document.getElementById('modalVisor'));
    modalVisor.show();
}