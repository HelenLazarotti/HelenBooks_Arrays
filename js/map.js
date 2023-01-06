//precisamos colocar um desconto nesses livros, pra isso vamos usar o map():

//função pra dar desconto:
function applyDiscount(books) {
    //defino qtd do desconto:
    const discount = 0.3

    //passamos os livros com desconto pra ca:
    //e aplico ele em CADA livro:
    booksDiscount = books.map(books => {

        //quero alterar APENAS o $ do livro:
        return { ...books, preco: books.preco - (books.preco * discount) }
        //com esses ... ele vai fazer uma cópio de TODO meu array pra OUTRO objeto, e oq quero alterar, no caso o preço.

        //
    })
    //e retorno:
    return booksDiscount
}