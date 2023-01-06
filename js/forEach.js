//pego a section onde meus livros vão ficar dentro:
const elementToAddBooks = document.getElementById('livros')

//pego o section que fica os preços:
const fullPriceBooks = document.getElementById('valor_total_livros_disponiveis')

//aqui o meu objeto que retorna all, vai se chamar bookList
function showBooksInScreen(bookList) {
  //começa vazio:
  fullPriceBooks.innerHTML = ''

  //peço p começar vazio, pra na h de clicar nos btn p mostrar os livros, ñ gerar conflito:
  elementToAddBooks.innerHTML = ''

  //percorrer esse objeto/array:
  bookList.forEach(books => {

    //crio uma função pra verificar a disponibilidade do livro, com operador ternário :) :
    //verifico a qtde e retornar a img do livro, chamando pela sua classe
    let availableBook = books.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'

    //quero inserir dentro do section:
    elementToAddBooks.innerHTML += `
        <div class="livro">
      <img class="${availableBook}" src="${books.imagem}" alt="${books.alt}" />
      <h2 class="livro__titulo">${books.titulo}</h2>
      <p class="livro__descricao">${books.autor}</p>
      <p class="livro__preco" id="preco">R$${books.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${books.categoria}</span>
      </div>
    </div>`
    //
  })
}