import React from 'react'

function DOADORPERFIL() {
  return (
    <div>
         <div class="container">
        <div class="form-img">
            <img src="imagem de tela de perfil - Doador.svg " alt=""/>
        </div>
        <div class="form">
            <div class="form-header">
                
                <img class="logo" src="logo doação de sangue (2).png" alt=""/>
                <h1>Perfil do Doador</h1>
                <div class="voltar-button">
                    <button href="./Tela inicial/tela inicial.html">Voltar</button>
                </div>
            </div>
        
            <div class="form-content">
                <img class="avatar" src="Cópia de user.png" alt=""/>
                <h4>Dados pessoais de usuário</h4>
            </div>
        
            <div class="input-group">
                <div class="primeiraColuna">
                    <div class="input-box">
                        <label for="firstname">Nome*</label>
                        <input id="firstname" type="text" name="firstname"/>
                    </div>
        
                    <div class="input-box">
                        <label for="tipoSanguineo">Tipo Sanguíneo*</label>
                        <input id="tipoSanguineo" type="text" name="tipoSanguineo"/>
                    </div>
        
                    <div class="input-box">
                        <label for="cpf">CPF*</label>
                        <input id="cpf" type="text" name="cpf"/>
                    </div>
        
                    <div class="input-box">
                        <label for="date">Data de nascimento*</label>
                        <input id="data" type="date" name="data"/>
                    </div>
                </div>
        
                <div class="segundaColuna">
                    <div class="input-box">
                        <label for="endereco">Endereço*</label>
                        <div class="input-btn-wrapper">
                            <input id="endereco" type="text" name="endereco"/>
                            <button onclick="EditarEndereco()" class="bntEditar">Editar</button>
                        </div>
                    </div>
        
                    <div class="input-box">
                        <label for="email">Email*</label>
                        <div class="input-btn-wrapper">
                            <input id="email" type="email" name="email"/>
                           
                        </div>
                    </div>
        
                    <div class="input-box">
                        <label for="password">Senha*</label>
                        <div class="input-btn-wrapper">
                            <input id="password" type="password" name="password"/>
                            <button onclick="EditarSenha()" class="bntEditar">Editar</button>
                        </div>
                    </div>
        
                    <div class="input-box">
                        <label for="number">Telefone*</label>
                        <div class="input-btn-wrapper">
                            <input id="number" type="tel" name="number"/>
                            <button onload="EditarTelefone()" class="bntEditar">Editar</button>
                        </div>
                    </div> 
                </div> 
             </div>

             <div class="sair-button">
                <button onclick="excluirConta()">Excluir conta</button>
            </div>

        </div> 
    </div> 
    </div>
  )
}

export default DOADORPERFIL
