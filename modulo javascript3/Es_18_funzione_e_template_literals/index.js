function minuscolo(strings, ...values) {
    return strings.reduce((result, strings, i) => {
        return result + strings + (values[i] ? values[i].toLowerCase() : '');
    }, '');
}

const nome = "MARIO";
const saluto = minuscolo `Ciao ${nome}, come stai?`;   //chiamata della funzione con il template literals
console.log(saluto);

//La funzione con template literals (detta anche tagged template literals) è una funzionalità avanzata, 
// che ti permette di personalizzare il modo in cui una stringa viene costruita quando utilizzi template literals.

//SINTASSI GENERALE
//1: Il NOME DELLA FUNZIONE, è la funzione che intercetta il template literal.
//2: I TESTI STATICI, vengono separati dalle espressioni interpolate (${}).
//3: La FUNZIONE, ricevee questi pezzi come parametri e può manipolarli prima di restituire il risultato. 

//4: STRINGS: ARRAY, che contiene i testi statici suddivisi prima e dopo le interpolazioni.
//5: VALUES: ARRAY, che contiene i valori interpolati (${}).
//LA FUNZIONE ORA PUO' MANIPOLARE QUESTI VALORI PRIMA DI RESTITUIRE IL RISULTATO. 

//QUINDI: 
// LE FUNZIONI CON TEMPLATE LITERALS PERMETTONO DI PERSONALIZZARE LA COSTRUZIONE DI UNA STRINGA PRIMA CHE VENGA RESTITUIRA, RICEVENDO 2 PARAMETRI:
// UN ARRAY CON LE PARTI STATICHE DELLA STRINGA E L'ALTRO ARRAY CON I VALORI INTERPOLATI. 
// POSSONO ESSERE USATE PER TRASFORMARE, EVIDENZIARE, O VALIDARE IL CONTENTENUTO DELLA STRINGA. COME? 
//ATTRAVERSO: .toLowerCase(), .trim(), .replace("a", "b"), .split (" "), .includes ("test"), e... .toUpperCase(). 