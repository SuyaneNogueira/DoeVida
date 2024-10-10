import React from 'react'

function PerfilHospital() {
  return (
    <div>
       <div class="container">
        <div class="form-img">
            <img src="./perfilHospital/imagem de perfil - Hospital.svg " alt=""/>
        </div>
        <div class="form">
            <div class="form-header">
               <img class="logo" src="./perfilHospital/Cópia de logo doação de sangue (2).png" alt=""/>
               <h1>Perfil do Hospital</h1>
               <div class="voltar-button">
                <button>Voltar</button>
            </div>
            </div>

            <div class="form-content">
                <img class="avatar" src="./perfilHospital/user.png" alt=""/>
                <h4>Dados do Hospital</h4>
            </div>
 
            <div class="input-group">

                <div class="primeiraColuna">
                    <div class="input-box">
                        <label for="hospital">Hospital*</label>
                        <input id="hospital" type="text" name="hospital"/>
                    </div>
        
                    <div class="input-box">
                        <label for="responsavel">Responsável*</label>
                        <input id="responsavel" type="text" name="responsavel"/>
                    </div>
        
                    <div class="input-box">
                        <label for="numero">Número*</label>
                        <input id="numero" type="text" name="numero"/>
                    </div>
        
                    <div class="input-box">
                        <label for="cnpj">CNPJ*</label>
                        <input id="cnpj" type="date" name="cnpj"/>
                    </div>
                </div>
        
                <div class="segundaColuna">

                    <div class="input-box">
                        <label for="email">Login*</label>
                        <div class="input-btn-wrapper">
                            <input id="email" type="email" name="email"/>
                            <button class="bntEditar">Editar</button>
                        </div>
                    </div>

                    <div class="input-box">
                        <label for="password">Senha*</label>
                        <div class="input-btn-wrapper">
                            <input id="password" type="password" name="password"/>
                            <button class="bntEditar">Editar</button>
                        </div>
                    </div>

                    <div class="input-box">
                        <label for="endereco">Website*</label>
                        <div class="input-btn-wrapper">
                            <input id="website" type="text" name="website"/>
                            <button class="bntEditar">Editar</button>
                        </div>
                    </div>

                    <div class="input-box">
                        <label for="number">Equipe*</label>
                        <div class="input-btn-wrapper">
                            <input id="equipe" type="tel" name="equipe"/>
                            <button class="bntEditar">Editar</button>
                        </div>
                    </div> 
                </div> 
             </div> 

             <div class="sair-button">
                <button>Excluir conta</button>
            </div>

        </div> 
    </div> 
    </div>
  )
}

export default PerfilHospital
