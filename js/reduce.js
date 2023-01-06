//reduce(): vai pegar todo um array e transformá-lo em um único valor:

function calculateTotalBookValue(allBooks){

    //quero q pegue all livros, e aplique o reduce:
    return allBooks.reduce((acc, books) => acc + books.preco, 0).toFixed(2)

    //acc e método pra somar TUDO
}
