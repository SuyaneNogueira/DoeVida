import React from 'react'

function Login() {
  return (
    <div>
     <div className="container">
        <div className="form-image">
            <img src="./Imagens Utilizadas/imagem da tela de login hospitalar.svg"/>
        </div>
        <div className="form">
                <div className="form-header">
                    <div className="tittle">
                        <h1>Login</h1>
                    </div>
                </div>
                <div className="mensagem">
                    <p>Digite os dados de acesso do hospital no campo abaixo.</p>
                </div>
                <div className="input-group">
                    <div className="input-box">
                        <div className="input-box">
                            <label for="email">Email</label>
                            <input id="email" type="email" name="email" placeholder="Email" required/>
                        </div>
    
                        <div className="input-box">
                            <label for="password">Senha</label>
                            <input id="password" type="password" name="password" placeholder="Senha" required/>
                        </div>
                    </div>
                </div>

                <div className="esqueceuSenha">
                    <button href="#">Esqueci minha senha</button>
                </div>
                
                <div className="confirm-input">
                    <input type="checkbox" id="confirmacao" name="confirmacao" value="confirmacao" required/>
                    <label for="confirmacao">
                        Ao confirmar os dados preenchidos do login acima, você concorda com os nossos 
                        <button href="#">Termos de Uso</button> e nossa 
                        <button href="#">Política de Privacidade</button>.
                    </label>
                </div>

                <div className="login-button">
                  <button href="./perfilHospital/indexHospital.html" onclick="login()">Entrar</button>
                </div>

                <label>Não possui conta? <button href="cadastro.html">Cadastre-se</button></label>

        </div>
    </div>
    </div>
  )
}

export default Login
