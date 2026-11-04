let btn = document.getElementById("boton")
let passcode = document.getElementById("nombre")
let error = document.getElementById("texto_error")




if(btn){
    btn.addEventListener("click", ()=>{
    if(passcode.value === "2003-11-04"){
        window.location.href = "pagina_inicio.html"
    }else{
        error.innerHTML = `<span>Fecha incorrecta</span>`
    }    
})
}




 



