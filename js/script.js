let btn = document.getElementById("boton")
let passcode = document.getElementById("nombre")
let error = document.getElementById("texto_error")
const mensajes = ["Mensaje 1","Mensaje 2","Mensaje 3","Mensaje 4","Mensaje 5","Mensaje 6","Mensaje 7"]
const TIEMPO_ESPERA_SEGUNDOS = 10; 

btn.addEventListener("click", ()=>{

    if(passcode.value === "Byron"){
        window.location.href = "pagina_inicio.html"
    }else{
        error.innerHTML = `<spam>Nombre incorrecto</spam>`
    }    
})

function dispararConfeti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      zIndex: 9999
    });
  }



  function formatearTiempo(segundosTotales) {
    const horas = Math.floor(segundosTotales / 3600);
    const minutos = Math.floor((segundosTotales % 3600) / 60);
    const segundos = segundosTotales % 60;

    const hh = String(horas).padStart(2, '0');
    const mm = String(minutos).padStart(2, '0');
    const ss = String(segundos).padStart(2, '0');

    return `${hh}:${mm}:${ss}`;
  }

  function mensaje_aleatorio() {
    const boton = document.getElementById("btn_aleatorio");
    const textoOriginal = "Obtener mensaje";
    let tiempoRestante = TIEMPO_ESPERA_SEGUNDOS;

    const indice = Math.floor(Math.random() * mensajes.length);
    document.getElementById("mensaje").textContent = mensajes[indice];

    boton.disabled = true;
    boton.textContent = `Espera (${formatearTiempo(tiempoRestante)})`;

    const intervalo = setInterval(() => {
      tiempoRestante--;

      if (tiempoRestante > 0) {
        boton.textContent = `Espera (${formatearTiempo(tiempoRestante)})`;
      } else {
        clearInterval(intervalo);
        boton.disabled = false;
        boton.textContent = textoOriginal;
      }
    }, 1000);
  }



