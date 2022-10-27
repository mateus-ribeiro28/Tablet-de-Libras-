const contbtn = document.querySelector("#enviar")
const connom = document.querySelector("#contn")
const conema = document.querySelector("#contem")
const contele = document.querySelector("#conttel")
const concel = document.querySelector("#contcel")

contbtn.addEventListener('click', async(e) =>{
    let a = connom.value 
    let b = conema.value
    let c = contele.value
    let d = concel.value
    if(a !== '' && b !== '' && c !== '' && d !== ''){
        console.log("foi")
        let mr = document.querySelector("#Recadastrei");
        e.preventDefault()
        mr.innerHTML = `
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Sugestão</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                    </div>
                    <div class="modal-body">Obrigado pelo comentário.<br> Nós valorizamos cada feedback recebido</div>
                    <div class="modal-footer">
                        <button type="button" class="btn text-white" style="background-color: #118CD9;" data-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>
        `
        
    }else{
        e.preventDefault()
        console.log("deu ruim!")
        let mr = document.querySelector("#Recadastrei");
        mr.innerHTML = `<br>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
             Algum campo está vazio <br>
             Verifique se: <br>
             O E-mail digitado é válido. <br>
             Se os campos de telefone e celular estão preenchidos. <br>
             Se o campo nome está preenchido<br>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
        </div>`
    }
    
    
})