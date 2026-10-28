let btn = document.getElementById("boton")
let passcode = document.getElementById("nombre")
let error = document.getElementById("texto_error")

btn.addEventListener("click", ()=>{

    if(passcode.value === "Byron"){
        window.location.href = "pagina_inicio.html"
    }else{
        error.innerHTML = `<spam>Nombre incorrecta</spam>`
    }    
})

