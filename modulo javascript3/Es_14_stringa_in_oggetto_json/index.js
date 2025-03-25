const jsonString = '{"primo":"Danilo","secondo":"Alessia","terzo":"Clara","quarto":"Gioanna","quinto":"Lorenzo","sesto":"Paola","settimo":"Riccardo","ottavo":"Eleonora","nono":"Roberto"}';

// Ora puoi usare JSON.parse per convertirla in un oggetto
const topVincitori = JSON.parse(jsonString);

console.log(topVincitori);