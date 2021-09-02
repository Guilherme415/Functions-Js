let array = []

array.push("0") // adiciona um elemento a ultima posição do array

array.length // tamanho do array

array.sort() // ordena o array

delete array[x] // deleta o elemento na posição x e coloca undefined na posição

array.splice() // Adiciona ou remove (ou os dois) elementos no array 
//.splice("indice que quer trabalhar, "quantos elementos será excluidos", " 'Elementos que serão adicionados' ")

array.pop() // remove o ultimo elemento do array

array.shift() // remove o primeiro elemento do array

array.unshift() // adiciona um elemento a primeira posição do array

array.slice(x, y) // retorna um novo array a partir do indice x e vai até o indice y, porém o indice y não entra

const concat = array.concat(array1, array2, 'Elemento novo') // Junta dois arrays e pode criar novos elementos