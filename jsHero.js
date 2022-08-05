function solution(words, query) {
	let resultado = [];
	resultado.push(
        words.filter(item => item.toUpperCase().includes(query.toUpperCase())
            )
        );
	return resultado
};
