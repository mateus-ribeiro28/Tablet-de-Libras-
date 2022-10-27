const cepchecado = document.querySelector('#cep-cadastro')
const termos = document.querySelector("#gridCheck")
let estadoElement = document.querySelector('#estado-cadastro')
let cidadeElement = document.querySelector('#cidade-cadastro')
let bairroElement = document.querySelector('#bairro-cadastro')
let ruaElement = document.querySelector('#rua-cadastro')
let numeroElement = document.querySelector('#numero-cadastro')
let complementoElement = document.querySelector('#complemento-cadastro')
let nomeElement = document.querySelector('#nome-cadastro')
let emailElement = document.querySelector('#email-cadastro')
let senhaElement = document.querySelector('#senha-cadastro')
let confSenhaElement = document.querySelector('#confi-senha-cadastro')
let btnEnviar = document.getElementById('btn-enviar')

const pegarCep = async() =>{
    
    let cep = document.querySelector('#cep-cadastro').value

    const cepURL = `https://viacep.com.br/ws/${cep}/json/`

    const res = await fetch(cepURL)

    const data = await res.json()

    return data

    //console.log(data)
}

const mostraCep = async(CEP) =>{

    const data = await pegarCep(CEP)

    estadoElement.value = data.uf
    cidadeElement.value = data.localidade
    bairroElement.value = data.bairro
    ruaElement.value = data.logradouro
    //numeroElement.value = data.complemento

    //console.log(bairroElement)

}

cepchecado.addEventListener('blur', async(e) =>{
    
    e.preventDefault()

    mostraCep()
})


btnEnviar.addEventListener('click', async(e) =>{
    let checkNome = nomeElement.value
    let checkEmail = emailElement.value
    let checkSenha = senhaElement.value
    let checkConfSenha = confSenhaElement.value
    let checkCep = cepchecado.value
    
    if(checkEmail.includes('@') !== false && checkEmail !== '' && checkSenha === checkConfSenha && checkNome !== '' && checkCep !== '' && termos.checked == true){
        let mr = document.querySelector("#botao");
        e.preventDefault()
        mr.innerHTML = `
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Cadastramento</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">Cadastro na lista de espera Realizado com Sucesso <br>enviaremos um e-mail de confirmação com novas instruções</div>
                    <div class="modal-footer">
                        <button type="button" class="btn text-white" style="background-color: #118CD9;" data-dismiss="modal">Ok</button>
                    </div>
                  </div>
                </div>
            </div>
        `
    }else{
        e.preventDefault()
        let mr = document.querySelector("#botao")
        mr.innerHTML = `<br>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
             O seu cadastro não pode ser concluído. <br>
             Verifique se: <br>
             O E-mail digitado é válido. <br>
             As senhas são iguais. <br>
             Os outros campos estão completamente preenchidos.<br>
             Se você concordou com nossos termos e condições
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
        </div>`
    ;}
    
})