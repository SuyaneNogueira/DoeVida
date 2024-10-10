let NomeDoHospital = document.getElementById('nome do hospital')
let EmailDoHospital = document.getElementById('EmailHospital')
let ResponsavelDoHospital = document.getElementById('responsavelDoperfil')
let SenhaHospital = document.getElementById('password')
let CidadeDoHospital = document.getElementById('cidade')

let termohospital
let posicaoEmail
let hospitalLogado 
let posicaoNome

let vetorNomeDoHospital = []
let vetorResponsavelDoHospital = []
let vetorEmailDoHospital = []
let vetorSenhaHospital = []
let vetorCidadeDoHospital = []

function Cadastrar(){

    vetorNomeDoHospital.push(NomeDoHospital.value)
    vetorResponsavelDoHospital.push(CidadeDoHospital.value)
    vetorEmailDoHospital.push(EmailDoHospital.value)
    vetorSenhaHospital.push(SenhaHospital.value)
    vetorCidadeDoHospital.push(CidadeDoHospital.value)

    CidadeDoHospital.value = ''
    NomeDoHospital.value = ''
    ResponsavelDoHospital.value = ''
    EmailDoHospital.value = ''
    SenhaHospital.value = ''
  
    localStorage.setItem('NomeDoHospitalSalvo', JSON.stringify(vetorNomeDoHospital))
    localStorage.setItem('ResponsavelHospitalSalvo', JSON.stringify(vetorResponsavelDoHospital))
    localStorage.setItem('EmailDoHospitalSalvo', JSON.stringify(vetorEmailDoHospital))
    localStorage.setItem('SenhaDoHospitalSalvo', JSON.stringify(vetorSenhaHospital))
    localStorage.setItem('CidadeDoHospitalSalvo', JSON.stringify(vetorCidadeDoHospital))

    termohospital = document.getElementById('confirmacao')
        
    if(termohospital.checked){

        window.location.href='navbar.html'

        }else{

            alert('Poxa! Você não aceitou os termos .')

        }
        
        if(vetorNomeDoHospital == null){
       
            vetorNomeDoHospital = []
            vetorResponsavelDoHospital = []
            vetorEmailDoHospital = []
            vetorSenhaHospital = []
            vetorCidadeDoHospital = []
    
            CadastrofinalHospital()
    
        }else{
    
            CadastrofinalHospital()

        }
}
function CadastrofinalHospital(){
    vetorNomeDoHospital.push(NomeDoHospital.value)
    vetorResponsavelDoHospital.push(CidadeDoHospital.value)
    vetorEmailDoHospital.push(EmailDoHospital.value)
    vetorSenhaHospital.push( SenhaHospital.value)
    vetorCidadeDoHospital.push(CidadeDoHospital.value)

    CidadeDoHospital.value = ''
    NomeDoHospital.value = ''
    ResponsavelDoHospital.value = ''
    EmailDoHospital.value = ''
    SenhaHospital.value = ''
  
    localStorage.setItem('NomeDoHospitalSalvo', JSON.stringify(vetorNomeDoHospital))
    localStorage.setItem('ResponsavelHospitalSalvo', JSON.stringify(vetorResponsavelDoHospital))
    localStorage.setItem('EmailDoHospitalSalvo', JSON.stringify(vetorEmailDoHospital))
    localStorage.setItem('SenhaDoHospitalSalvo', JSON.stringify( vetorSenhaHospital))
    localStorage.setItem('CidadeDoHospitalSalvo', JSON.stringify(vetorCidadeDoHospital))

    vetorNomeDoHospital = JSON.parse(localStorage.getItem('NomeDoHospitalSalvo'))
    vetorResponsavelDoHospital = JSON.parse(localStorage.getItem('ResponsavelHospitalSalvo'))
    vetorEmailDoHospital = JSON.parse(localStorage.getItem('EmailDoHospitalSalvo'))
    vetorSenhaHospital = JSON.parse(localStorage.getItem('SenhaDoHospitalSalvo'))
    vetorCidadeDoHospital = JSON.parse(localStorage.getItem('CidadeDoHospitalSalvo'))
}

function login() {
    
    vetorNomeDoHospital = JSON.parse(localStorage.getItem('NomeDoHospitalSalvo'))
    vetorResponsavelDoHospital = JSON.parse(localStorage.getItem('ResponsavelHospitalSalvo'))
    vetorEmailDoHospital = JSON.parse(localStorage.getItem('EmailDoHospitalSalvo'))
    vetorSenhaHospital = JSON.parse(localStorage.getItem('SenhaDoHospitalSalvo'))
    vetorCidadeDoHospital = JSON.parse(localStorage.getItem('CidadeDoHospitalSalvo'))

    posicaoEmail = vetorEmailDoHospital.indexOf(EmailDoHospital.value)


    if( posicaoEmail == -1){

        alert('Hospital inexistente!')

    }else{

        if(EmailDoHospital.value == vetorEmailDoHospital[posicaoEmail] && NomeDoHospital.value == vetorNomeDoHospital[posicaoNome]){

        alert('Login Confirmado! :D')

        window.location.href = 'perfil.html'

        hospitalLogado  = vetorNomeDoHospital[posicaoNome]

        localStorage.setItem('hospitalLogado ', JSON.stringify(hospitalLogado ))

        } else{
 
            alert('Dados não conferem!')

        }

    }


}