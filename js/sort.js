// o sort(), vai colocar os itens em ordem, mas ñ exatamente, pois como é binário, coloca nessa ordem, ex: 110 29 1 101 11
//me retorna: 1 11 29 101 110 
//logo preciso forçar ele a ficar em uma ordem "normal"

//pego ID do btn de ordenação:
let btnOrder = document.getElementById('btnOrdenarPorPreco');

btnOrder.addEventListener('click', sortByPrice)

function sortByPrice(){
    //peço pra ordernar meus livros, passando uma função p ele order certo:
    let booksOrdered = books.sort((a, b) => a.preco - b.preco)
    //chamo a funç4ao de exibir os livros na tela
    showBooksInScreen(booksOrdered)
}

//EX de sort():
/*
let n = [3, 0 , 2, 1, 10, 100];
console.log(n.sort()) 

retorna -> [ 0, 1, 10, 100, 2, 3 ]


let p = ['Zequinha', 'anna', 'fábio', 'caio', 'Anna', 'lucas']

retorna -> [ 'Anna', 'Zequinha', 'anna', 'caio', 'fábio', 'lucas' ]*/