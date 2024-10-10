import React from 'react'

function ForDois() {
  return (
    <div>
       <div class="container">
        <div class="form-image">
            <img src="img/undraw_completed_tasks_vs6q.svg" alt=""/>
        </div>
        <div class="form">
            <div class="form-header">
                <div class="title">
                    <h1>Formulário</h1>
                </div>
            </div>

            <div class="gender-inputs">
                <div class="gender-title">

                    <h2>Qual seu tipo sanguineo?</h2>

                    <div class="radio-group">
                        <div class="radio-column">
                            <label>
                                <input type="radio"  id="sangue" name="tipo sanguineo" value="sangue">A+</input>
                            </label>
                            <label>
                                <input type="radio"  id="sangue" name="tipo sanguineo" value="sangue">A-</input>
                            </label>
                        </div>
                        <div class="radio-column">
                            <label>
                                <input type="radio" id="sangue" name="tipo sanguineo" value="sangue">B+</input>
                            </label>
                            <label>
                                <input type="radio"  id="sangue" name="tipo sanguineo" value="sangue">B-</input>
                            </label>
                        </div>
                        <div class="radio-column">
                            <label>
                                <input type="radio" id="sangue" name="tipo sanguineo" value="sangue">AB+</input>
                            </label>
                            <label>
                                <input type="radio" id="sangue" name="tipo sanguineo" value="sangue">AB-</input>
                            </label>
                        </div>
                        <div class="radio-column">
                            <label>
                                <input type="radio" id="sangue" name="tipo sanguineo" value="sangue">O+</input>
                            </label>
                            <label>
                                <input type="radio" id="sangue" name="tipo sanguineo" value="sangue">O-</input>
                            </label>
                          
                        </div>
                    </div>

                    <h2>Gostaria que essa doação fosse anônima?</h2>

                    <div class="input-radio">
                        <label>
                            <input type="radio" id="Sim" name="opção" value="Sim">Sim</input>
                        </label>
                       
                        <label>
                            <input type="radio" id="Não" name="opção" value="Não">Não</input>
                        </label>
                    </div>
               

                    <h2>Como classifica o seu estado e saúde atual?</h2>

                    <div class="input-radio">
                        <label>
                            <input type="radio" id="Muito bom" name="opção" value="Sim">Muito bom</input>
                        </label>
                   
                        <label>
                            <input type="radio" id="Bom" name="opção" value="Não">Bom</input>
                        </label>
                       
                        <label>
                            <input type="radio" id="Rasuável" name="opção" value="Não">Rasuável</input>
                        </label>
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
                <button onclick="Enviar()">Enviar</button>
            </div>

        </div> 
    </div>

    </div>
  )
}

export default ForDois
