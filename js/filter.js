//filter gera um novo array, com base na filtragem, e essa função SEMPRE retrorna um valor booleano.

//faço um método que pegue ALL meus botões, se eu ver no HTML todos tem a mesma classe inicial, então:
const buttons = document.querySelectorAll('.btn')

//posso aplicar o forEach aqui:
buttons.forEach(btn => btn.addEventListener('click', filterBooks))
//percorre todos meus botões, que seja qual for que eu clicar me retorna a função:


//peço pro JS pega toooodos eles.
function filterBooks() {
    //consigo saber qual botão to clicando
    //pegando todo o elemento e chamando o id dele.
    const elementBtn = document.getElementById(this.id)

    //peço valor q está dentro de cada elemento:
    const category = elementBtn.value

    //filtro all livros:
    //e digo que TODO livro quero uma ação específica:
    //ou seja, quero pegar all livros que tem a categoria de cada um dos btn

    //verifico se está disponível ou não, p qd eu click no btn de 'livros dispovíveis de certo:
    let filteredBooks = category == 'disponivel' ? filterByAvailbility() : filterByCategory(category)
    //se a categoria for disponível ? faço um filtro naqueles que a qtde é > 0 : se ñ faço com base na categoria que já tinhamos.

    //pego a função que exibe os itens na tela, passando como parâmetro o meu filter q mostra cada table referente:
    showBooksInScreen(filteredBooks)

    //mostro a span de $ apenas se a categoria for igual a:
    if(category == 'disponivel'){
        //função da lá no "reduce.js"
        const totalValue = calculateTotalBookValue(filteredBooks)
        availavleBooksScreen(totalValue)
    }
}
//criei funções pra minha condicional ternária lá em cima.
function filterByCategory(category) {
    return books.filter(books => books.categoria == category)
}

function filterByAvailbility() {
    return books.filter(books => books.quantidade > 0)
}

function availavleBooksScreen(totalValue){
    //pego o elemento que criei la no forEach, que pegou a section  de preço:
    fullPriceBooks.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por <span id="valor">R$ ${totalValue}</span></p>
    </div>
    `
}

