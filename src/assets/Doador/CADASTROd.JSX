import React from 'react'
import './DOADORstyle.css'
// "DOADORstyle.css


function CADASTROd() {
  return (
    <div>
       <div className="container">
        <div className="form-image">
            <img src="img/imagem da tela de cadastro.svg" alt=""/>
        </div>
        <div className="form">
            <div className="form-header">
                <div class="title">
                    <h1>Cadastre-se</h1>
                </div>
                <div className="login-button">
                    <button type="button" onclick="Entrar()">Entrar</button>
                </div>
            </div>
            <div className="input-group">

                <div className="primeiraColuna">

                    <div className="input-box">
                        <label for="firstname">Nome Completo</label>
                        <input id="firstname" type="text" name="firstname" placeholder="Digite seu nome" required/>
                    </div>

                    <div className="input-box">
                        <label for="date">Data de nascimento</label>
                        <input id="data" type="date" name="data" required/>
                    </div>

                    <div className="input-box">
                        <label for="cpf">CPF</label>
                        <input id="cpf" type="text" name="cpf" placeholder="Digite seu CPF" required/>
                    </div>

                    <div className="input-box">
                        <label for="endereco">Endereço</label>
                        <input id="endereco" type="text" name="endereco" placeholder="Digite seu endereço" required/>
                    </div>

                </div> 

                <div className="segundaColuna">
                    
                    <div className="input-box">
                        <label for="number">Telefone fixo e/ou celular</label>
                        <input id="number" type="tel" name="number" placeholder="(xx) xx xxxx-xxxx" required/>
                    </div>

                    <div className="input-box">
                        <label for="email">E-mail</label>
                        <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required/>
                    </div>

                    <div className="input-box">
                        <label for="password">Senha</label>
                        <input id="password" type="password" name="password" placeholder="Digite sua senha" required/>
                    </div>

                    <div className="input-box">
                        <label for="Confirmpassword">Confirme sua Senha</label>
                        <input id="Confirmpassword" type="password" name="Confirmpassword"
                            placeholder="Confirme sua senha" required/>
                    </div>

                </div>

            </div>

            <div className="gender-inputs">
                <div className="gender-title">
                    <h6>Gênero</h6>
                </div>
                <div className="gender-group">
                    <div className="gender-input">
                        <input type="radio" id="female" name="gender"/>
                        <label for="female">Feminino</label>
                    </div>

                    <div className="gender-input">
                        <input type="radio" id="male" name="gender"/>
                        <label for="male">Masculino</label>
                    </div>

                    <div className="gender-input">
                        <input type="radio" id="outhers" name="gender"/>
                        <label for="outhers">Outros</label>
                    </div>

                    <div className="gender-input">
                        <input type="radio" id="none" name="gender"/>
                        <label for="none">Prefiro não dizer</label>
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
           <button onclick="Cadastrar()">Cadastrar</button>
            </div>

        </div>
    </div>
    </div>
  )
}

export default CADASTROd
