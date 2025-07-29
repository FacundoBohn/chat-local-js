const inputMensajes = document.querySelector("#mensajes");
const btnenviar = document.querySelector("#enviar");
const TextoElemento = document.querySelector("#guardarTexto")
const chatMessagesContainer = document.querySelector("#messages-display-area");

function enviarmensajes(){
    let chat = inputMensajes.value   
    
    if(chat == ""){
        alert("No haz escrito nada.")
    } else{
        let lista = document.createElement('li');
        lista.innerHTML = chat;
        TextoElemento.appendChild(lista)
        
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
        inputMensajes.value = "";
    }
}
btnenviar.addEventListener('click', enviarmensajes);

inputMensajes.addEventListener('keydown',(e) =>{
    if(e.key == 'Enter'){
        enviarmensajes();
    }
})

