let newUl = document.createElement("ul");

let li1 = document.createElement("li");
li1.textContent = "Banana";

let li2 = document.createElement("li");
li2.textContent = "Arancia";

let li3 = document.createElement("li");
li3.textContent = "Fragola";

newUl.appendChild(li1);
newUl.appendChild(li2);
newUl.appendChild(li3);

document.body.appendChild(newUl);

//SPIEGAZIONE:
//Il metodo createElement() è utile quando desideri creare dinamicamente nuovi elementi HTML, 
//manipolarli (aggiungendo testo, attributi, stili, eventi) e infine inserirli nella pagina.