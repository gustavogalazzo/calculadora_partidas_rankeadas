// Aqui estou atribuindo o retorno da função para está variavel
let resultado = rank(110, 5)
// Nesta função estou fazendo os calculos de vitorias e derrotas do jogador e fazendo um return para a função
function rank(vitorias, derrotas) {
  let partidas = vitorias - derrotas
  return partidas
}
// Já Aqui estou definindo a logica utilizando a estrutura condicional
let nivel

if (resultado < 10) {
  nivel = 'Ferro'
} else if (resultado > 11 && resultado < 20) {
  nivel = 'Bronze'
} else if (resultado > 21 && resultado < 50) {
  nivel = 'Prata'
} else if (resultado > 51 && resultado < 80) {
  nivel = 'Ouro'
} else if (resultado > 81 && resultado < 90) {
  nivel = 'Diamante'
} else if (resultado > 91 && resultado < 100) {
  nivel = 'Lendario'
} else {
  nivel = 'Imortal'
}
// Na saida estou mostrando o resultado e o nivel do jogador, utilizando a interpolação de strings
console.log(
  `O heroi tem saldo de ${resultado} vitorias, e está no nivel de ${nivel}`
)
