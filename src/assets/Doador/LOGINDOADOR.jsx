import React from 'react'

function LOGINDOADOR() {
  return (
    <div>
      <div class="container">
        <div class="form-image">
            <img src="img/imagem da tela de login.svg" alt=""/>
        </div>
        <div class="form">
                <div class="form-header">
                    <div class="tittle">
                        <h1>Login</h1>
                    </div>
                </div>
                <div class="mensagem">
                    <p>Digite seus dados de acesso no campo abaixo.</p>
                </div>
                <div class="input-group">
                    <div class="input-box">
                        <div class="input-box">
                            <label for="email">E-mail</label>
                            <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required/>
                        </div>
    
                        <div class="input-box">
                            <label for="password">Senha</label>
                            <input id="password" type="password" name="password" placeholder="Digite sua senha" required/>
                        </div>
                    </div>
                </div>
                <div class="esqueceuSenha">
                    <button href="indexCadastro.html">Esqueci minha senha</button>
                </div>
                
                <div class="confirm-input">
                    <input type="checkbox" id="confirmacao" name="confirmacao" value="confirmacao" required/>
                    <label for="confirmacao">
                        Ao confirmar os dados preenchidos do login acima, você concorda com os nossos 
                        <button href="#">Termos de Uso</button> e nossa 
                        <button href="#">Política de Privacidade</button>.
                    </label>
                </div>

                <div class="login-button">
                   <button onclick="login()">Entrar</button>
                </div>

                <label>Não possui conta? <button href="indexCadastro.html">Cadastre-se</button></label>
        </div>
    </div>
    </div>
  )
}

export default LOGINDOADOR
