const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

/*a) O que vai ser impresso no console?
Linha a linha serão impressos todos os números maiores que 18: 19,19, 21, 23, 25, 27, 30
b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
não, seria necessário usar "for...in..."
*/
