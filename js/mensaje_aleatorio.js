let cooldown = document.getElementById("btn_cooldown")
let img_cooldown = document.getElementById("img_mensaje")
const mensajes = ["Mensaje 1","Mensaje 2","Mensaje 3","Mensaje 4","Mensaje 5","Mensaje 6","Mensaje 7"]
const TIEMPO_ESPERA_SEGUNDOS = 10
let mensaje_reinicio = document.getElementById("mensaje")
let intervalo_cooldown = null
const img_default = `<img class="img-fluid" style="max-width: 130px; height: auto;" src="https://i.pinimg.com/originals/c0/2b/a9/c02ba9aea8d19e731c10172cfd09af6a.gif" alt=""></img>`

 function formatearTiempo(segundosTotales) {
    const horas = Math.floor(segundosTotales / 3600);
    const minutos = Math.floor((segundosTotales % 3600) / 60);
    const segundos = segundosTotales % 60;

    const hh = String(horas).padStart(2, '0');
    const mm = String(minutos).padStart(2, '0');
    const ss = String(segundos).padStart(2, '0');

    return `${hh}:${mm}:${ss}`;
  }

function actualizar_tiempo(){
    const boton = document.getElementById("btn_aleatorio")
    const tiempo_final = parseInt(localStorage.getItem("cooldown_final"))
    const ahora = Date.now()
    const tiempo_restante = tiempo_final - ahora
    const segundos_restantes = Math.ceil(tiempo_restante / 1000)

    if(segundos_restantes > 0){
        if(boton) boton.disabled = true
        if(cooldown) cooldown.innerHTML = `<p style = "color:red;">Espera (${formatearTiempo(segundos_restantes)})</p>`;
        if(img_cooldown) img_cooldown.innerHTML = `<img class="img-fluid" style="max-width: 130px; height: auto;" src="https://usagif.com/wp-content/uploads/gifs/happy-cat-26.gif" alt="">`
        } else {
            if(intervalo_cooldown) clearInterval(intervalo_cooldown);
            localStorage.removeItem("cooldown_final")
            localStorage.removeItem("mensaje_guardado")

            if(cooldown) cooldown.innerHTML = ""
            if(mensaje_reinicio) mensaje_reinicio.innerHTML = ""
            if(img_cooldown) img_cooldown.innerHTML = img_default
            if(boton) boton.disabled = false;
        }

}


function iniciar_temporizador(){
    const boton = document.getElementById("btn_aleatorio")
    if(boton) boton.disabled = true

    if(intervalo_cooldown) clearInterval(intervalo_cooldown);

    actualizar_tiempo()
    intervalo_cooldown = setInterval(actualizar_tiempo,1000)
}
  

  function mensaje_aleatorio() {

    if(localStorage.getItem("cooldown_final")) return;

    const indice = Math.floor(Math.random() * mensajes.length);
    const mensaje_seleccionado = mensajes[indice];

    document.getElementById("mensaje").textContent = mensaje_seleccionado
    localStorage.setItem("mensaje_guardado", mensaje_seleccionado)

    const tiempo_final = Date.now() + (TIEMPO_ESPERA_SEGUNDOS * 1000)
    localStorage.setItem("cooldown_final", tiempo_final)

    iniciar_temporizador()

  }

  window.addEventListener("DOMContentLoaded", () => {
    
    
    const tiempo_final = localStorage.getItem("cooldown_final")

    if(tiempo_final && Date.now() < parseInt(tiempo_final)){
        const mensaje_guardado = localStorage.getItem("mensaje_guardado")

        if(mensaje_guardado){
            document.getElementById("mensaje").textContent = mensaje_guardado
        }

        iniciar_temporizador()
    }else{
        localStorage.removeItem("cooldown_final")
        localStorage.removeItem("mensaje_guardado")
        if(mensaje_reinicio) mensaje_reinicio.textContent = ""
    }
})