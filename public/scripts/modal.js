export default function Modal(){
    
    const modalWraper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)
    
    function open(){
        // funcionalidade de atribuir a classe active para a modal
        modalWraper.classList.add("active");
    }
    function close(){
        //  funcionalidade de remover a classe active da modal
        modalWraper.classList.remove("active");
    }

    return {
        open,
        close
    }
}