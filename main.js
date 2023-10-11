function tocaSom(idElementoAudio){

    document.querySelector(idElementoAudio).play('');
}

while (contador < listaDeTeclas.length){

    const instrumento = listaDeTeclas [contador];

    const tecla = listaDeTeclas[contador];

    const idAduio = `#som_${instrumento}`;

    listaDeTeclas[contador].classList[1];

    tecla.onclick = function(){
        tocaSom(idAduio);
    };

    contador = contador + 1;
}
