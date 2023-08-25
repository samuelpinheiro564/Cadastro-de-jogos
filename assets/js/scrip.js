function verifyInput() {
    let titulo = document.getElementById("input-title").value;
    let preco = document.getElementById("input-preco").value;
    let descricao = document.getElementById("input-descricao").value;
    let plataforma = document.getElementById("input-plataforma").value;
    let imgLink = document.getElementById("input-imgLink").value;

    console.log(titulo);
    console.log(preco);
    console.log(descricao);
    console.log(plataforma);
    console.log(imgLink);

    if (titulo == "" || preco == "" || descricao == "" || plataforma == "" || imgLink == "") {
        console.log("Os inptus estão vazios");
         ("Preencha todos os campos", "error");
        // return true;
    } else {
        console.log("Os inputs estão preenchidos");
        showMsg("Jogo cadastrado com sucesso", "success");
        // return false;
    }
    ComporJogo();
}

function showMsg(msg, msgType) {

    let msgDiv = document.getElementById("msg");

    msgDiv.innerHTML = "";


    let msgScreen =
        `
        <p class="${msgType}">${msg}</p>
    `;

    msgDiv.innerHTML = msgScreen;
   
    setTimeout(function(){
        msgDiv.innerHTML = "";
    },3000);
}

class Game {
    constructor(titulo,price,descricao,plataforma,imgLink){
        this.titulo = titulo;
        this.price = price;
        this.descricao =descricao;
        this.plataforma = plataforma;
        this.imgLink = imgLink
    }
}
const JogoTeste = new Game("teste","123","desctest","steam","url");
console.log(JogoTeste);

function ComporJogo(){
    let titulo = document.getElementById("input-title").value;
    let preco = document.getElementById("input-preco").value;
    let descricao = document.getElementById("input-descricao").value;
    let plataforma = document.getElementById("input-plataforma").value;
    let imgLink = document.getElementById("input-imgLink").value;

    const jogo = new Game(titulo,preco,descricao,plataforma,imgLink);

    return console.log(jogo);
}

