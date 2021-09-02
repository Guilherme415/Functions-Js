// Foreach: Serve para callback

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice) {
    // console.log(`${indice + 1}) ${nome}`)
})

// Map: Percorre todos elementos do array e gera um novo array com a ação pedida no parâmetro

const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(x => x * 2) // Elemento na posição x * 2

//console.log(resultado)

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50}'
]

const converterJson = obj => JSON.parse(obj)
const apenasPrecos = produto => produto.preco

const precos = carrinho.map(converterJson).map(apenasPrecos)
// console.log(precos)

// Filter: cria um novo array a partir daqueles elementos escolhidos, como: todos elementos > 10

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]

// console.log(produtos.filter(p => p.preco > 2000))

const frageis = p => p.fragil
const precosMenorQueVinte = p => p.preco < 20

// console.log(produtos.filter(frageis).filter(precosMenorQueVinte))

// Reduce: percorre a coleção e gera uma informação final em cima dela

console.log(produtos.reduce())