
const sort = (array) => {
  const sortedArray = [ ...array];
  let aux;

  for (let ant = 0; ant < array.length - 1; ant++) // percorre até a penultima pos do arr
    for (let prox = ant + 1; prox < array.length; prox++) { // pra cada elemento, percorro todos os proximos depois dele
      aux = sortedArray[ant]; // variavel pra guardar o valor do elm anterior
      
      // se o anterior é maior que o pŕoximo ... 
      if (sortedArray[prox] < sortedArray[ant]) {
        sortedArray[ant] = sortedArray[prox]; // inverto as posicoes, o anteior passa ser o proximo pois é maior
        sortedArray[prox] = aux; 
      }
    }
    return sortedArray;
}
  
const fibonacci = (n) => {
  let f = 1, ant = 0, i = 0, aux;
  const sequence = []
  
  // somo o elemento anterior com o atual até o numero desejado
  if (n > 1) {
    while (i < n) {
      aux = f;
      f = ant + f;
      ant = aux;

      sequence.push(f);
      i++;
    }
    return sequence;
  }
  return 'There\'s no sequence for this number';  
}

const statistics = (dataset) => {
  const arr = [...dataset];
  const stats = {};
  let moda = {}
  let sum = 0;

  arr.forEach(num => {
    sum += num; // soma de todos valores
    moda[num] = moda[num] ? moda[num] + 1 : 1; // objeto chave e valor de cada elemento para encontrar a moda
  })
  // media
  stats.avg = Math.ceil(sum / arr.length);
  // retorno a propriedade que possuí o maior valor agregado
  stats.moda = Object.keys(moda).reduce((a, b) => { return moda[a] > moda[b] ? a : b; })
  // funcao pra calcular a mediana
  stats.median = median(arr);

  return stats;
}

function median(arr) {
  let arrMiddle = arr.length / 2;
  // orderno meu array e pego o valor que esta meio 
  shortedArr = [...arr].sort((a, b) => (a - b))
  // se for par devemos pegar a media dos dois valores centrais
  if (arr.length % 2 == 0)
    return ( shortedArr[arrMiddle] + shortedArr[arrMiddle + 1] ) / 2;
  // senao, pegamos o que esta no meio
  else
    return shortedArr[arrMiddle];
}

// exports.sort = sort;
module.exports = {
  sort,
  fibonacci,
  statistics
}