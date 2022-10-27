const lemail = document.querySelector("#txemail")
const lsenha = document.querySelector("#ctds")
const logini = document.querySelector("#logou")

logini.addEventListener('click', e =>{
    let z = lemail.value
    let y = lsenha.value
    if(z.includes('@') == true && y !== ''){
        e.preventDefault()
        let s = document.querySelector("#lrespostas");
        s.innerHTML = `
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Área de Login</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                </div>
                <div class="modal-body">Login Realizado com sucesso</div>
                <div class="modal-footer">
                    <button type="button" class="btn text-white" style="background-color: #118CD9;" data-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>`;
    }else if(z.includes('@') == false || z == ''){
        e.preventDefault()
        let mr = document.querySelector("#lrespostas")
        mr.innerHTML = `<br>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
             Insira um E-mail válido
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
        </div>`
    }else if(y == ''){
        e.preventDefault()
        let mr = document.querySelector("#lrespostas")
        mr.innerHTML = `<br>
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
             Preencha o Campo de Senha
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
        </div>`
    }else{console.log("algum outro erro")}
})

