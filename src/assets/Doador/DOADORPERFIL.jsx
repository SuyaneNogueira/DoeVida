import React from 'react'

function DOADORPERFIL() {
  return (
    <div>
         <div className="container">
        <div className="form-img">
            <img src="imagem de tela de perfil - Doador.svg " alt=""/>
        </div>
        <div className="form">
            <div className="form-header">
                
                <img className="logo" src="logo doação de sangue (2).png" alt=""/>
                <h1>Perfil do Doador</h1>
                <div className="voltar-button">
                    <button href="./Tela inicial/tela inicial.html">Voltar</button>
                </div>
            </div>
        
            <div className="form-content">
                <img className="avatar" src="Cópia de user.png" alt=""/>
                <h4>Dados pessoais de usuário</h4>
            </div>
        
            <div className="input-group">
                <div className="primeiraColuna">
                    <div className="input-box">
                        <label for="firstname">Nome*</label>
                        <input id="firstname" type="text" name="firstname"/>
                    </div>
        
                    <div className="input-box">
                        <label for="tipoSanguineo">Tipo Sanguíneo*</label>
                        <input id="tipoSanguineo" type="text" name="tipoSanguineo"/>
                    </div>
        
                    <div className="input-box">
                        <label for="cpf">CPF*</label>
                        <input id="cpf" type="text" name="cpf"/>
                    </div>
        
                    <div className="input-box">
                        <label for="date">Data de nascimento*</label>
                        <input id="data" type="date" name="data"/>
                    </div>
                </div>
        
                <div className="segundaColuna">
                    <div className="input-box">
                        <label for="endereco">Endereço*</label>
                        <div className="input-btn-wrapper">
                            <input id="endereco" type="text" name="endereco"/>
                            <button onclick="EditarEndereco()" className="bntEditar">Editar</button>
                        </div>
                    </div>
        
                    <div className="input-box">
                        <label for="email">Email*</label>
                        <div class="input-btn-wrapper">
                            <input id="email" type="email" name="email"/>
                           
                        </div>
                    </div>
        
                    <div class="input-box">
                        <label for="password">Senha*</label>
                        <div className="input-btn-wrapper">
                            <input id="password" type="password" name="password"/>
                            <button onclick="EditarSenha()" className="bntEditar">Editar</button>
                        </div>
                    </div>
        
                    <div className="input-box">
                        <label for="number">Telefone*</label>
                        <div className="input-btn-wrapper">
                            <input id="number" type="tel" name="number"/>
                            <button onload="EditarTelefone()" className="bntEditar">Editar</button>
                        </div>
                    </div> 
                </div> 
             </div>

             <div className="sair-button">
                <button onclick="excluirConta()">Excluir conta</button>
            </div>

        </div> 
    </div> 
    </div>
  )
}

export default DOADORPERFIL
