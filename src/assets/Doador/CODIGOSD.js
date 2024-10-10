let NomeDeUsuário = document.getElementById('firstname')
let SenhaDeUsuário = document.getElementById('password')
let EmailDeUsuário = document.getElementById('email')
let ConfirmacaoSDeUsuário = document.getElementById('Confirmpassword')
let telefoneDeusuario = document.getElementById('number')
let endereçoDeUsuario = document.getElementById('endereco')
let CPFdeUsuario = document.getElementById('cpf')
let DataDeUsuariao = document.getElementById('data')
let sagueDoador =  document.getElementById('sangue')


let termo
let posicaoEmail
let userLogado 
let posicaoSenha

let vetorUsername = []
let vetorPassword = []
let vetorEmail = []
let vetorTelefone = []
let vetorEndereço = []
let vetorCPF = []
let vetorData = []
let vertorSangue = []


function Cadastrar(){

    termo = document.getElementById('confirmacao')

    if(termo.checked){

        }else{

            alert('Poxa! Você não aceitou os termos .')

        }

        if(vetorUsername == null){
       
            vetorUsername = []
            vetorPassword = []
            // console.log('valor vazio')
            CadastrofinalDoador()
    
        }else{
            // alert('valor cheio')
    
            CadastrofinalDoador()

        }
}

function CadastrofinalDoador() {
    
    vetorUsername.push(NomeDeUsuário.value)
    vetorPassword.push(SenhaDeUsuário.value)
    vetorEmail.push(EmailDeUsuário.value)
    vetorTelefone.push(telefoneDeusuario.value)
    vetorEndereço.push(endereçoDeUsuario.value)
    vetorCPF.push(CPFdeUsuario.value)
    vetorData.push(DataDeUsuariao.value)
    vertorSangue.push(sagueDoador)



    // dados.push(
    //     [
    //         'nome' = NomeDeUsuário.value,
    //         'senha' = SenhaDeUsuário.value,
    //         'email' = EmailDeUsuário.value
    //     ]
    // );

    SenhaDeUsuário.value = ''
    NomeDeUsuário.value = ''
    EmailDeUsuário.value = ''
    ConfirmacaoSDeUsuário.value = ''
    telefoneDeusuario.value = ''
    endereçoDeUsuario.value = ''
    CPFdeUsuario.value = ''
    DataDeUsuariao.value = ''
    sagueDoador.value = ''

    if(localStorage.getItem('UserSalvos')){
        const teste = JSON.parse(localStorage.getItem('UserSalvos'))
        teste.push(vetorUsername[0])
        localStorage.setItem('UserSalvos', JSON.stringify (teste))
    }else{
        localStorage.setItem('UserSalvos', JSON.stringify(vetorUsername))
    }


    if(localStorage.getItem('PassSalvos')){
        const teste = JSON.parse(localStorage.getItem('PassSalvos'))
        teste.push(vetorPassword[0])
        localStorage.setItem('PassSalvos', JSON.stringify (teste))
    }else{
        localStorage.setItem('PassSalvos', JSON.stringify(vetorPassword))
    }
  
    if(localStorage.getItem('EmailSAlvos')){
        const teste = JSON.parse(localStorage.getItem('EmailSAlvos'))
        teste.push(vetorEmail[0])
        localStorage.setItem('EmailSAlvos', JSON.stringify (teste))
    }else{
        localStorage.setItem('EmailSAlvos', JSON.stringify(vetorEmail))
    }

    if(localStorage.getItem('telefoneSAlvos')){
        const teste = JSON.parse(localStorage.getItem('telefoneSAlvos'))
        teste.push(vetorTelefone[0])
        localStorage.setItem('telefoneSAlvos', JSON.stringify (teste))
    }else{
        localStorage.setItem('telefoneSAlvos', JSON.stringify(vetorTelefone))
    }
    
    if(localStorage.getItem('EndereçoSAlvos')){
        const teste = JSON.parse(localStorage.getItem('EndereçoSAlvos'))
        teste.push(vetorTelefone[0])
        localStorage.setItem('EndereçoSAlvos', JSON.stringify (teste))
    }else{
        localStorage.setItem('EndereçoSAlvos', JSON.stringify(vetorEndereço))
    }

    if(localStorage.getItem('CPFSAlvos')){
        const teste = JSON.parse(localStorage.getItem('CPFSAlvos'))
        teste.push(vetorCPF[0])
        localStorage.setItem('CPFSAlvos', JSON.stringify (teste))
    }else{
        localStorage.setItem('CPFSAlvos', JSON.stringify(vetorCPF))
    }

    if(localStorage.getItem('DataSAlvos')){
        const teste = JSON.parse(localStorage.getItem('DataSAlvos'))
        teste.push(vetorData[0])
        localStorage.setItem('DataSAlvos', JSON.stringify (teste))
    }else{
        localStorage.setItem('DataSAlvos', JSON.stringify(vetorData))
    }
    if(localStorage.getItem('SangueSAlvos')){
        const teste = JSON.parse(localStorage.getItem('SagueSAlvos'))
        teste.push(vertorSangue[0])
        localStorage.setItem('SangueSAlvos', JSON.stringify (teste))
    }else{
        localStorage.setItem('SanguSAlvos', JSON.stringify(vertorSangue))
    }


    // localStorage.setItem('dados', dados)

    vetorUsername = JSON.parse(localStorage.getItem('UserSalvos'))
    vetorPassword = JSON.parse(localStorage.getItem('PassSalvos'))
    vetorEmail = JSON.parse(localStorage.getItem('EmailSAlvos'))
    vetorTelefone = JSON.parse(localStorage.getItem('telefoneSAlvos'))
    vetorCPF = JSON.parse(localStorage.getItem('CPFSAlvos'))
    vetorEndereço = JSON.parse(localStorage.getItem('EndereçoSAlvos'))
    vetorData = JSON.parse(localStorage.getItem('DataSAlvos'))
    vertorSangue = JSON.parse(localStorage.getItem('SanguSAlvos'))
    // vetorDados = JSON.parse(localStorage.getItem('dados'))
    window.location.href = 'indexDoador.html'
}

function login() {
    console.log(localStorage.getItem('PassSalvos'))
    vetorPassword = JSON.parse(localStorage.getItem('PassSalvos'))
    vetorEmail = JSON.parse(localStorage.getItem('EmailSAlvos'))

    posicaoEmail = vetorEmail.indexOf(EmailDeUsuário.value)
    posicaoSenha = vetorPassword.indexOf(SenhaDeUsuário.value)

    if( posicaoEmail == -1){

        alert('Usuário inexistente!')

    }else{

        if(EmailDeUsuário.value == vetorEmail[posicaoEmail] && SenhaDeUsuário.value == vetorPassword[posicaoSenha]){

        alert('Login Confirmado! :D')

        userLogado = vetorUsername[posicaoUser]
    
        localStorage.setItem('UserLogado', JSON.stringify(userLogado))
                
        window.location.href = 'indexDoador.html'
        } else{
 
            alert('Dados não conferem!')

        }

    }


}

function EditarEndereco(){



}


function EditarSenha(){

    
}

function EditarTelefone(){



}

function excluirConta(){

 

}


function onLoadPerfil(){
    NomeDeUsuário.value = JSON.parse(localStorage.getItem('UserSalvos'))[0];

    EmailDeUsuário.value =JSON.parse( localStorage.getItem('EmailSAlvos'))[0];

    SenhaDeUsuário.value = JSON.parse(localStorage.getItem('PassSalvos'))[0];

    telefoneDeusuario.value = JSON.parse(localStorage.getItem('telefoneSAlvos'))[0];

    endereçoDeUsuario.value = JSON.parse(localStorage.getItem('EndereçoSAlvos'))[0];

    CPFdeUsuario.value = JSON.parse(localStorage.getItem('CPFSAlvos'))[0];

    DataDeUsuariao.value = JSON.parse(localStorage.getItem('DataSAlvos'))[0];
    
    sagueDoador.value = JSON.parse(localStorage.getItem('SanguSAlvos'))[0];
}