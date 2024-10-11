import React from 'react'

function CadastroHOSPITAL() {
  return (
    <div>
       <div className="container">
        <div className="form-image">
            <img src="img/imagem da tela de cadastro hospitalar.svg"/>
        </div>
        <div className="form">
                <div className="form-header">
                    <div className="title">
                        <h1>Novo hospital</h1>
                    </div>
                    <div className="login-button">
                        <button type="button" onclick="Entrar()">Entrar</button>
                    </div>
                </div>

                <div className="input-group">
                    <div className="primeiraColuna">
                        <div className="input-box">
                            <label for="nome do hospital">Nome do hospital</label>
                            <input id="nome do hospital" type="text" name="nome do hospital" required/>
                        </div>
    
                        <div className="input-box">
                            <label for="email">Email</label>
                            <input id="EmailHospital" type="email" name="email" required/>
                        </div>
    
                        <div className="input-box">
                            <label for="number">Telefone</label>
                            <input id="number" type="tel" name="number" placeholder="(xx) xxxx-xxxx" required/>
                        </div>
    
                        <div className="input-box">
                            <label for="numero">Número</label>
                            <input id="numero" type="text" name="numero" required/>
                        </div>
    
                        <div className="input-box">
                            <label for="cidade">Cidade</label>
                            <input id="cidade" type="text" name="cidade" required/>
                        </div> 
    
                        <div className="input-box">
                            <label for="pais">País</label>
                            <input id="pais" type="text" name="pais" required/>
                        </div>
    
                        <div className="input-box">
                            <label for="responsavel">Responsável</label>
                            <input id="responsavelDoperfil" type="text" name="responsavel" placeholder="João Cardoso" required/>
                        </div>
    
                    </div>

                    <div className="segundaColuna">
                        <div className="input-box">
                            <label for="site">Website</label>
                            <input id="site" type="text" name="site" required/>
                        </div>
    
                        <div className="input-box">
                            <label for="password">Senha</label>
                            <input id="password" type="password" name="password" required/>
                        </div>
    
                        <div className="input-box">
                            <label for="cep">CEP</label>
                            <input id="cep" type="text" name="cep" required/>
                        </div>
    
                        <div className="input-box">
                            <label for="bairro">Bairro</label>
                            <input id="bairro" type="text" name="bairro" required/>
                        </div>
    
                        <div className="input-box">
                            <label for="estado">Estado</label>
                            <input id="estado" type="text" name="estado" required/>
                        </div>
    
                        <div className="input-box">
                            <label for="cnpj">CNPJ</label>
                            <input id="cnpj" type="text" name="cnpj" required/>
                        </div>
    
                        <div className="input-box">
                            <label for="equipe">Equipe</label>
                            <input id="equipe" type="text" name="equipe" placeholder="equipe principal" required/>
                        </div>

                    </div>
                    
                </div>

                <div className="confirm-input">
                    <input type="checkbox" id="confirmacao" name="confirmacao" value="confirmacao"/>
                    <label for="confirmacao">
                        Ao confirmar os dados preenchidos do formulário acima, você concorda com os nossos
                        <button href="#">Termos de Uso</button> e nossa
                        <button href="#">Política de Privacidade</button>.
                    </label>
                </div>

                <div className="continue-button">
                  <button href="./perfilHospital/indexHospital.html"onclick="Cadastrar()">Continuar</button>
                </div>
        </div>
    </div>
    </div>
  )
}

export default CadastroHOSPITAL
