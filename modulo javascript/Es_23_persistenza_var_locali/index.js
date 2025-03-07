function outerFunction(x, initialValue) {
    let result = initialValue; // Memorizza il valore iniziale
  
    function innerFunction(y) {
      result += y; // Aggiunge y a result
      return result; // Restituisce il valore aggiornato
    }
  
    return innerFunction; // Restituisce innerFunction
  }
  
  // Esempio di utilizzo
  const aggiornaSomma = outerFunction(5, 10); // x = 5 (non usato in innerFunction), initialValue = 10
  
  console.log(aggiornaSomma(2)); // 10 + 2 = 12
  console.log(aggiornaSomma(3)); // 12 + 3 = 15
  console.log(aggiornaSomma(5)); // 15 + 5 = 20
  