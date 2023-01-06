//esse arq "main.js" é responsável por fazer a REQUISIÇÃO:
let books = []
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

//buscar livros da API:
getSearchBooks()

//quero uma função assíncrona:
async function getSearchBooks() {
    //peguei a API:
    const res = await fetch(endPointAPI)

    //transformei em objeto:
    books = await res.json()
    console.table(books)

    //crio var/função pro desconto:
    let booksDiscount = applyDiscount(books)

    //chamo os livros, com o desconto já:
    showBooksInScreen(booksDiscount)
}





