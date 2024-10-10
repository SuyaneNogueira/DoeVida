import React from 'react'
import './DOADORstyle.css'
// "DOADORstyle.css


function CADASTROd() {
  return (
    <div>
       <div class="container">
        <div class="form-image">
            <img src="img/imagem da tela de cadastro.svg" alt=""/>
        </div>
        <div class="form">
            <div class="form-header">
                <div class="title">
                    <h1>Cadastre-se</h1>
                </div>
                <div class="login-button">
                    <button type="button" onclick="Entrar()">Entrar</button>
                </div>
            </div>
            <div class="input-group">

                <div class="primeiraColuna">

                    <div class="input-box">
                        <label for="firstname">Nome Completo</label>
                        <input id="firstname" type="text" name="firstname" placeholder="Digite seu nome" required/>
                    </div>

                    <div class="input-box">
                        <label for="date">Data de nascimento</label>
                        <input id="data" type="date" name="data" required/>
                    </div>

                    <div class="input-box">
                        <label for="cpf">CPF</label>
                        <input id="cpf" type="text" name="cpf" placeholder="Digite seu CPF" required/>
                    </div>

                    <div class="input-box">
                        <label for="endereco">Endereço</label>
                        <input id="endereco" type="text" name="endereco" placeholder="Digite seu endereço" required/>
                    </div>

                </div> 

                <div class="segundaColuna">
                    
                    <div class="input-box">
                        <label for="number">Telefone fixo e/ou celular</label>
                        <input id="number" type="tel" name="number" placeholder="(xx) xx xxxx-xxxx" required/>
                    </div>

                    <div class="input-box">
                        <label for="email">E-mail</label>
                        <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required/>
                    </div>

                    <div class="input-box">
                        <label for="password">Senha</label>
                        <input id="password" type="password" name="password" placeholder="Digite sua senha" required/>
                    </div>

                    <div class="input-box">
                        <label for="Confirmpassword">Confirme sua Senha</label>
                        <input id="Confirmpassword" type="password" name="Confirmpassword"
                            placeholder="Confirme sua senha" required/>
                    </div>

                </div>

            </div>

            <div class="gender-inputs">
                <div class="gender-title">
                    <h6>Gênero</h6>
                </div>
                <div class="gender-group">
                    <div class="gender-input">
                        <input type="radio" id="female" name="gender"/>
                        <label for="female">Feminino</label>
                    </div>

                    <div class="gender-input">
                        <input type="radio" id="male" name="gender"/>
                        <label for="male">Masculino</label>
                    </div>

                    <div class="gender-input">
                        <input type="radio" id="outhers" name="gender"/>
                        <label for="outhers">Outros</label>
                    </div>

                    <div class="gender-input">
                        <input type="radio" id="none" name="gender"/>
                        <label for="none">Prefiro não dizer</label>
                    </div>
                </div>
            </div>

            <div class="confirm-input">
                <input type="checkbox" id="confirmacao" name="confirmacao" value="confirmacao"/>
                <label for="confirmacao">
                    Ao confirmar os dados preenchidos do formulário acima, você concorda com os nossos
                    <a href="#">Termos de Uso</a> e nossa
                    <a href="#">Política de Privacidade</a>.
                </label>
            </div>

            <div class="continue-button">
           <button onclick="Cadastrar()">Cadastrar</button>
            </div>

        </div>
    </div>
    </div>
  )
}

export default CADASTROd
