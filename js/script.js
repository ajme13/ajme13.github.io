let btn = document.getElementById("boton")
let passcode = document.getElementById("fechaN")
let error = document.getElementById("texto_error")

btn.addEventListener("click", ()=>{

    if(passcode.value === "2003-11-04"){
        window.location.href = "pagina_inicio.html"
    }else{
        error.innerHTML = `<spam>Fecha incorrecta</spam>`
    }    
})

