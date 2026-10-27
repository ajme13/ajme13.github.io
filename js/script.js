let btn = document.getElementById("boton")
let passcode = document.getElementById("fechaN")


btn.addEventListener("click", ()=>{

    if(passcode.value === "2003-11-04"){
        window.location.href = "pagina_inicio.html"
    }else{
        console.log("no valido")
    }    
})

console.log("carga")