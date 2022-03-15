/* 
Quando clicar no pokemon da listagem tenmos que esconcer o cartão do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

Pra isso é preciso trabalhar com dois elementos:
1 - listagem
2 - cartão pokemon

É preciso criar duas váriaveis no JS para trabalhar com os elementos da tela

Precisa ser trabalhado um evento de clique feito pelo usuário na listagem do pokemon

- remover a classe aberto só do cartão que está aberto
- ao clicar no pokemon da listagem, pegamos o id do pokemon para saber qual cartão mostrar
- remover a classe ativo que marca o pokemon selecionado
- adicionar a classe ativo no item da lista selecionado
*/



// É preciso criar duas váriaveis no JS para trabalhar com os elementos da tela

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')  

listaSelecaoPokemons.forEach(pokemon => {
    //Precisa ser trabalhado um evento de clique feito pelo usuário na listagem do pokemon

    pokemon.addEventListener('click', () => {
       //remover a classe aberto só do cartão que está aberto
       const cartaoPokemonAberto = document.querySelector('.aberto')
       cartaoPokemonAberto.classList.remove('aberto') 
       //ao clicar no pokemon da listagem, pegamos o id do pokemon para saber qual cartão mostrar
       
       const idPokemonSelecionado = pokemon.attributes.id.value

       const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado

       const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
       cartaoPokemonParaAbrir.classList.add('aberto')

       //remover a classe ativo que marca o pokemon selecionado
       const pokemonAtivoNaListagem = document.querySelector('.ativo')
       pokemonAtivoNaListagem.classList.remove('ativo')

       //adicionar a classe ativo no item da lista selecionado
       const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
       pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})