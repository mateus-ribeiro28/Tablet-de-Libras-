const cepchecado = document.querySelector('#cep-cadastro')
let estadoElement = document.querySelector('#estado-cadastro')
let cidadeElement = document.querySelector('#cidade-cadastro')
let bairroElement = document.querySelector('#bairro-cadastro')
let ruaElement = document.querySelector('#rua-cadastro')
let complementoElement = document.querySelector('#complemento-cadastro')

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
    complementoElement.value = data.complemento

    //console.log(bairroElement)

}
cepchecado.addEventListener('blur', async(e) =>{
    
    e.preventDefault()

    mostraCep()
})