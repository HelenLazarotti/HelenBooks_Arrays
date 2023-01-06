/*let frutas = ["kiwi", "morango", "manga"]
//formas de percorrer um array:

frutas.forEach( function (item, indice){
    console.log(item, indice)

}) 

for(i=0; i < frutas.length; i++){
    console.log(frutas[i])
}

//se eu quiser saber o indice:
let indice_fruta = frutas.indexOf('morango')
console.log(indice_fruta)

//se eu quiser add:
frutas.push('laranja');
[🏀 , 🏀 , 🏀].push(🏈) => [ 🏀 , 🏀 , 🏀, 🏈 ]

console.log(frutas)
//se for no início frutas.unshift('laranja')

//remover:
frutas.pop() //remove do final
[ 🏀 , 🏀 , 🏀, 🏀 , ⚽ ].pop( ) => [🏀 , 🏀 , 🏀, 🏀]

frutas.shift() //remove do inicio
[⚽, 🏐 , 🏐 , 🏐, 🏐].shift( ) ⇒[🏐 , 🏐 , 🏐, 🏐]

//remover a partir do índice:
frutas.splice(indice_fruta, 2)
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].splice( 1, 2, 🎱 ) ⇒ [⚾ ,🎱, 🏀, 🏐 ] [ ⚾ , 🏈, ⚽, 🏀, 🏐 ].splice( 2, 3) ⇒ [⚾, 🏈 ]


frutas.includes()
[ ⚾ , 🏈, ⚽, 🏀 ].includes( ⚽ ) => true
/*O método includes verifica se um elemento está contido em um array e retorna true se o elemento estiver contido ou false caso contrário.*/

/*frutas.unshift() //adicionar um elemento no início de um array.
[🏀 , 🏀 , 🏀].unshift(🏐) ⇒ [ 🏐, 🏀 , 🏀 , 🏀]


/*frutas.keys( ) //retorna um novo array composto pelas chaves (posições) do array o qual ele foi aplicado
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].keys() => ["0","1","2","3"]

/*[ 🏀 , 🏀 , 🏀 ].concat( [ ⚾ , ⚾ ] ) => [🏀 , 🏀 , 🏀, ⚾ , ⚾ ]
O método concat junta dois (ou mais) arrays em um novo array, sem alterar os já existentes.


*/