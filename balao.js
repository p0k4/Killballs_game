// 1 criar balão 
// 2 Estourar Balão
// 3 Carregar Jogo

var total = 0;


function criarBalao(){
    var balao = document.createElement("div");
    balao.setAttribute("class", "balao");

    var x = Math.floor(Math.random() * 600);
    var y = Math.floor(Math.random() * 400);

    balao.setAttribute("style", "left:"+x+"px;top:"+y+"px;");
    //<div class= balao "style= left: 30px; top: 60px"></div>
    balao.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(balao);
}

function estourar(objeto){
    document.body.removeChild(objeto);
    total++;
    var secore = document.getElementById("total");
    secore.innerHTML = "Baloes estourados " + total;

}

function carregarjogo(){
    setInterval(criarBalao, 1000);
}

