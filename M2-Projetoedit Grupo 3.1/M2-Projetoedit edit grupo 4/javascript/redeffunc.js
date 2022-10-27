const btnrecad = document.querySelector('#recadastrar')
const emrecad = document.querySelector('#emailrecad')

btnrecad.addEventListener('click', async(e) =>{
    let z = emrecad.value
    if(z.includes('@') !== false && z !== ''){
        let mr = document.querySelector("#Recadastrei");
        e.preventDefault()
        mr.innerHTML = `
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Recadastro</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                    </div>
                    <div class="modal-body">Enviaremos um mensagem para o endereço informado</div>
                    <div class="modal-footer">
                        <button type="button" class="btn text-white" style="background-color: #118CD9;" data-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>
        `
    }else{
        e.preventDefault()
        let mr = document.querySelector("#Recadastrei")
        mr.innerHTML = `<br>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
             Insira um E-mail válido
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
        </div>`
    ;}
    
})
