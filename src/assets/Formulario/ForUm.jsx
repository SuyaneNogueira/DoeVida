import React from 'react'

function ForUm() {
  return (
    <div>
         <div class="container">
        <div class="form-image"/>
            <img src="img/undraw_forms_re_pkrt.svg" alt=""/>
        </div>
        <div class="form">
            <div class="form-header">
                <div class="title">
                    <h1>Formulário</h1>
                </div>
                <div class="continue-button">
                 <button id="Próximo" onclick="Próximo()">Próximo</button> 
                </div>
            </div>
            <div class="input-group">

                <div class="primeiraColuna">

                    <h2>Responda o formulário a baixo:</h2>

                <div class="input-box">

                    <label for="firstname">Seu nome:</label>
                    <input id="firstname" type="text" name="firstname" placeholder="Digite" required></input>

                    <label for="lestname">Qual sua idade?</label>
                    <input id="lestname" type="text" name="lestname" placeholder="Digite" required></input>

                </div> 

                <div class="segundaColuna">
                    <h2>Você já doou sangue para essa organização antes?</h2>
                          
                    <div class="input-radio">
                        <label>
                            <input type="radio"id="Sim" name="opção" value="Sim">Sim</input>
                        </label>
                        
                        <label>
                            <input type="radio" id="Não" name="opção" value="Não">Não</input>
                        </label>
                    </div>
                          

                            <h2>Possui algum tipo de doença? </h2>

                            <div class="input-radio">
                                <label>
                                    <input type="radio"  id="Sim" name="opção" value="Sim">Sim</input>
                                    
                                </label>
                              
                                <label>
                                    <input type="radio"id="Não" name="opção" value="Não">Não</input>
                                </label>
                            </div>
            

                            <h2>Tem alergia a algum tipo de medicamento?</h2>

                    <div class="input-radio">
                        <label>
                            <input type="radio"  id="Sim" name="opção" value="Sim">Sim</input>
                        </label>
                     
                        <label>
                            <input type="radio" id="Não" name="opção" value="Não">Não</input>
                        </label>
                    </div>

                </div>

            </div>

            

        </div> 
    </div>
    </div>
  )
}

export default ForUm
