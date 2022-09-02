let numeroAtual = 1;

let votosBolsonaro = 0;
let votosLula = 0;
let votosBranco = 0;
let votosNando = 0;

let num1 = document.getElementById("numCandidato1");
let num2 = document.getElementById("numCandidato2");
let num3 = document.getElementById("numCandidato3");
let num4 = document.getElementById("numCandidato4");

let imagem = document.getElementById("imagemCandidato");
let nome = document.getElementById("nomeCandidato");
let partido = document.getElementById("partidoCandidato");


function digitarNumero(valor){

    if(numeroAtual == 1){
        num1.innerHTML = valor;
    } else if(numeroAtual == 2){
        num2.innerHTML = valor;
    } else if(numeroAtual == 3){
        num3.innerHTML = valor;
    } else if (numeroAtual == 4) {
        num4.innerHTML = valor;

        let numeroFinal = num1.innerHTML + num2.innerHTML + num3.innerHTML + num4.innerHTML;

        montarDadosCandidato(numeroFinal);
    } else {

    }
    

    numeroAtual++;
}

function montarDadosCandidato(numeroFinal){

    if(numeroFinal == "1717"){
        imagem.src = "https://static.poder360.com.br/2019/04/foto-oficial-Bolsonaro-774x644.png";
        nome.innerHTML += "Bolsonaro";
        partido.innerHTML += "Partido Liberal";
    } else if(numeroFinal == "1313") {
        imagem.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Lula_-_foto_oficial_-_05_jan_2007.jpg/800px-Lula_-_foto_oficial_-_05_jan_2007.jpg";
        nome.innerHTML += "Lula";
        partido.innerHTML += "Partido dos Trabalhadores";
    } else if(numeroFinal == "1234"){
        imagem.src = "https://catracalivre.com.br/wp-content/uploads/2019/09/nando-moura.png";
        nome.innerHTML += "Nando Moura";
        partido.innerHTML += "Partido do Youtube";
    } else {
        Swal.fire(
            'Candidato não encontrado! Verifique os números e pressione o botão "corrige".'
        )
        return;
    }

    document.getElementById("nomeCandidato").style.display = "block";
    document.getElementById("partidoCandidato").style.display = "block";

    document.getElementById("mensagemDigitar").style.display = "none";
    document.getElementById("mensagemVoto").style.display = "block";

    document.getElementById("mensagemConfirmar").style.display = "block";
    document.getElementById("mensagemCorrigir").style.display = "block";


}

function votarEmBranco(){

    corrigir();

    imagem.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Letter_x.svg/1200px-Letter_x.svg.png"
    nome.innerHTML += "Voto em Branco";
    partido.innerHTML += "Voto em Branco"

    num1.innerHTML = "X";
    num2.innerHTML = "X";
    num3.innerHTML = "X";
    num4.innerHTML = "X";

    document.getElementById("nomeCandidato").style.display = "block";
    document.getElementById("partidoCandidato").style.display = "block";

    document.getElementById("mensagemDigitar").style.display = "none";
    document.getElementById("mensagemVoto").style.display = "block";

    document.getElementById("mensagemConfirmar").style.display = "block";
    document.getElementById("mensagemCorrigir").style.display = "block";

    numeroAtual = 5;

}

function corrigir(){

    imagem.src = "https://www.arauco.cl/brasil/wp-content/uploads/sites/17/2018/01/branco-supremo-producto-1.jpg";
    nome.innerHTML = "<b>NOME: </b>";
    partido.innerHTML = "<b>PARTIDO: </b>";

    document.getElementById("nomeCandidato").style.display = "none";
    document.getElementById("partidoCandidato").style.display = "none";

    document.getElementById("mensagemDigitar").style.display = "block";
    document.getElementById("mensagemVoto").style.display = "none";

    document.getElementById("mensagemConfirmar").style.display = "none";
    document.getElementById("mensagemCorrigir").style.display = "none";


    document.getElementById("numCandidato1").innerHTML = "&nbsp;&nbsp;";
    document.getElementById("numCandidato2").innerHTML = "&nbsp;&nbsp;";
    document.getElementById("numCandidato3").innerHTML = "&nbsp;&nbsp;";
    document.getElementById("numCandidato4").innerHTML = "&nbsp;&nbsp;";

    numeroAtual = 1;
}

function confirmarVoto(){

    let numeroFinal = num1.innerHTML + num2.innerHTML + num3.innerHTML + num4.innerHTML;

    if(numeroFinal == "1717"){
        votosBolsonaro += 1;
    } else if(numeroFinal == "1313"){
        votosLula += 1;
    } else if(numeroFinal == "1234"){
        votosNando += 1;
    } else if(numeroFinal == "XXXX"){
        votosBranco += 1;
    } else {
        Swal.fire(
            'Número Invalido! Verifique seu voto novamente.'
        )
        return;
    }

    Swal.fire(
        'Seu voto foi contabilizado com sucesso!'
    )

    corrigir();

}