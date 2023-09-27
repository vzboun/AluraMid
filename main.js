function tocaSomPom(){

    document.querySelector('som_tecla_pom').play(''); 
}

const listaDeTeclas = document.querySelector('.tecla');
listaDeTeclas[0].onclick = tocaSomPom;

listaDeTeclas[1].onclick = tocaSomClap;
listaDeTeclas[2].onclick = tocasomTim
listaDeTeclas[3].onclick = tocasomPuff;
