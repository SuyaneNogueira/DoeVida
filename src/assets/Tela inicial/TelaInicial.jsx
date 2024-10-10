import React from 'react'
import './TelaInicial.css'

function TelaInicial() {
  return (
    <div>
         <div class="container">

<div class="navBar">

    <img class="imgUm" src="./Img_T_inicial/Logo.png" alt="logo"/>
    <h2>Doação de Sangue</h2>

    <div class="linksNavBar">
        <ul class="itens">
            <button class="link1">Campanhas</button> 
            <button class="link2">Onde Doar</button>
            <button class="link3">Parceiros</button>
            <button class="link4">Contado</button>
        </ul>
    </div>

    
    <button href="./telas de Perfil/index.html"><img class="perfil" src="Img_T_inicial/user perfil.png" alt=""/></button>

</div>
{/* <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    --> */}

<img class="fixa" src="Img_T_inicial/Seja um doador.png" alt=""/>

{/* <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    --> */}

<div class="body-opcoes">

    <div class="opcoesCadastro">

        <h1>Selecione uma das opções abaixo para o Cadastro!</h1>

        <div class="button-group">

            <div class="button-wrapper">
                <img src="Img_T_inicial/undraw_love_it_heart_dxlp.svg" alt="" class="btn-image"/>
                <button class="button-opcoes">Sou Doador</button>
            </div>

            <div class="button-wrapper">
                <img src="Img_T_inicial/undraw_doctors_p6aq.svg" alt="" class="btn-image"/>
                <button class="button-opcoes">Área Hospitalar</button>
            </div>

        </div>

    </div>
</div>


{/* <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    --> */}
<div class="cards-inicial">

    <div class="card">
        <img class="img-card" src="Img_T_inicial/Dia nacional do doador de sangue.png" alt=""/>

        <label>QUEM SOMOS</label>

        <p>Somos uma comunidade comprometida em salvar vidas através da doação de sangue. Facilitamos a conexão entre doadores e pessoas em necessidade, garantindo que cada doação faça a diferença. </p>

        <a href="./quem somos/index.html"><button class="button-cards">Sobre Nós!</button></a>

    </div>

    <div class="card2">
        <img class="img-card" src="Img_T_inicial/Doevida.png" alt=""/>

        <label>DOE VIDA DOE SANGUE</label>

        <p>Doar sangue é salvar vidas. Seu gesto pode ser o milagre que alguém precisa. Seja a esperança de alguém e doe sangue. Compartilhe o presente mais precioso: a vida.</p>

        <button class="button-cards">Quero Doar Sangue!</button>
    </div>

    <div class="card3">
        <img class="img-card" src="Img_T_inicial/Doevidaimg.png" alt=""/>

        <label>QUEM PODE DOAR SANGUE?</label>

        <p>Uma doação de sangue pode salvar até quatro vidas! Confira os requisitos para doar de forma segura. Sua generosidade é a esperança de muitos. Abra o arquivo e saiba mais!</p>

        <button class="button-cards">Saiba mais!</button>
    </div>

</div>
{/* <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    --> */}
<footer>
    <div class="secoes">
        <section class="informacoes">
            <div class="info1">
                <h2>Descrição</h2>
                <p>O projeto Doevida é uma plataforma dedicada à doação de sangue, onde doadores e hospitais podem se cadastrar e gerenciar seus perfis. O principal objetivo do projeto é facilitar e incentivar a doação de sangue,  conectando doadores voluntários com hospitais e centros de saúde que necessitam  de sangue para pacientes. A plataforma permite que doadores atualizem suas  informações e que hospitais publiquem suas necessidades, promovendo uma rede eficiente de comunicação e colaboração para salvar vidas.</p>
            </div>

            <div class="info2">
                <h2>Contato</h2>
                <p>(48) 91234-5678</p>
                <p>exemplo@gmail.com</p>
                <p>Brasil</p>
            </div>

            <div class="info3">
                <h2>TORNE-SE UM DOADOR DE SANGUE</h2>
                <p>Todos os dias acontecem centenas de acidentes, cirurgias e queimaduras violentas que exigem transfusão, assim como os portadores de hemofilia, leucemia e anemias.Além disso, doar sangue é um ato simples, tranquilo e seguro que não provoca risco.</p>
               <a href="./Tela de Cadastro - Login/indexCadastro.html"> <button class="bntFooter">Quero Doar Sangue!</button></a>
            </div>

        </section>
        <hr class="divisao"/>
        <section class="descricao">
            <img class="imgDois" src="/Img_T_inicial/logo doação de sangue.png" alt="logo"/>
            <h1 class="projeto">DoeVida</h1>
            <div class="creditos">
                <p>©DoeVidas todos os direitos reservados.</p>
            </div>
            <ul class="linksFooter">
                <li><a class="linkUm" >Termos de Uso</a></li>
                <li><a class="linkDois" >Sobre Nós</a></li>
                <li><a class="linkTres">Política de Privacidade</a></li>
            </ul>
        </section>
    </div>
</footer>
{/* <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    --> */}
</div>
    </div>
  )
}

export default TelaInicial
