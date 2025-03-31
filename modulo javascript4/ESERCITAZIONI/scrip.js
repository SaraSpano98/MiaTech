/**
 * Creare una struttura che dopo aver fatto una chiamata al server e aver ottenuto i dati, deve reinderizzare i dati dentro una tabella.
 * 1. [x] Andare a strutturare html.
 * 1.1 [x] Ci serve una tabella, abbiamo gia il thead ci manca il tbody.
 * 2. [x] Selezioniamo tutti gli elementi html con la quale andremo ad interagire.
 * 3. [x] Andiamo a strutturare lo state che conterra i nostri dati.
 * 4. [x] Andiamo a scrivere una funzione che ci permette di prendere i dati dall'esterno.(fetch)
 * 5. [x] Dobbiamo manipolare i dati in qualche modo? Si.
 * 5.1 [x] Dobbiamo scrivere una funzione che ci permette di selezionare il range di dati corretto in dipendenza del limite della pagina corrente.
 * 5.2 [x] Dobbiamo gestire un sistema di cache per la presa dei dati anche in dipendenza del punto 5.1.
 * 6. [x] Scriviamo una funzione che ci permette di trasformare l'array di oggetti in codice html da renderizzare in pagina.(render)
 * 7. [x] Dobbiamo lavorare con gli eventi? Si
 * 7.1 [x] Gestiamo gli event listener per i bottoni prev e next.
 * 7.2 [x] Al click dei bottoni dobbiamo aggiornare il valore di page, richiamare l'impaginazione, ri renderizzare la tabella.
 * 7.3 [x] Gestiamo una funzione che ci permette di renderizzare il widget di impaginazione.(html con bottoni e span)
 * 8. [x] Scriviamo una funzione di init che ci permette di eseguire le altre funzioni nell'ordine corretto.
 * 9. [x] Eseguo la funzione di init.
 */

// 2
const $dataBody = document.querySelector("#data-body");
const $pageSpan = document.querySelector("#page");
const $prevBtn = document.querySelector("#prev");
const $nextBtn = document.querySelector("#next");
const $limitSelect = document.querySelector("#limit");
const $sortSelect = document.querySelector("#sort");
const $filterSelect = document.querySelector("#filter")

// 3
const state = {
    data: null, //copia di rendering
    cache: [], //copia di cache
    pagination: {
        page: 1,
        limit: 10,
        totalPages: 1,
        hasPrevPage: false,
        hasNextPage: false
    },
    sorting: {
        key: "id",
        mode: "ASC",
    },
    filtering: {
        key: "id",
        mode: "COMPLETED"
    }
};

//utilities
const utilities = {
    sortData: (data) => {
        return data.sort((a, b) => {
            if (state.sorting.key == "id") {
                if (state.sorting.mode == "ASC") {
                    return a[state.sorting.key] - b[state.sorting.key]
                } else {
                    return b[state.sorting.key] - a[state.sorting.key]
                }
            } else {
                if (state.sorting.mode == "ASC") {
                    return a[state.sorting.key].localeCompare(b[state.sorting.key])
                } else {
                    return b[state.sorting.key].localeCompare(a[state.sorting.key])
                }
            }
        })
    },
    filteredData: (data) => {
            return data.filtering((a, b) => {
                if (state.filtering.key == "id") {
                    if (state.filtering.mode == "COMPLETED") {
                        return a[state.filtering.key] - b[state.filtering.key]
                    } else {
                        return b[state.filtering.key] - a[state.filtering.key]
                    }
                } else {
                    if (state.filtering.mode == "COMPLETED") {
                        return a[state.filtering.key].localeCompare(b[state.filtering.key])
                    } else {
                        return b[state.filtering.key].localeCompare(a[state.filtering.key])
                    }
                }
            })
        }
    }

// 4
const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "GET"
        });

        if (response.ok) {
            state.cache = await response.json();
        } else {
            throw new Error("Internal server error.");
        };
    } catch (error) {
        console.log(error);
    }
};

// 5.1
const paginateData = () => {
    state.pagination.totalPages = Math.ceil(state.cache.length / state.pagination.limit);
    const startIndex = state.pagination.limit * (state.pagination.page - 1);
    //10 * (1 - 1) = 0-9
    //10 * (2 - 1) = 10-19
    state.data = utilities.filteredData([...state.cache]).sortData([...state.cache]).splice(startIndex, state.pagination.limit);
    state.pagination.hasPrevPage = state.pagination.page > 1;
    state.pagination.hasNextPage = state.pagination.page < state.pagination.totalPages;

};

// 7.3
const renderPagination = () => {
    if (state.pagination.hasPrevPage) {
        $prevBtn.removeAttribute("disabled");
    } else {
        $prevBtn.setAttribute("disabled", true);
    }

    if (state.pagination.hasNextPage) {
        $nextBtn.removeAttribute("disabled");
    } else {
        $nextBtn.setAttribute("disabled", true);
    }

    $pageSpan.innerHTML = `${state.pagination.page} / ${state.pagination.totalPages}`;
};

// 6
const render = () => {
    const HTML = state.data.map((item) => {
        return `
        <tr> 
            <td>${item.userId}</td>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.body}</td>
        </tr>
        `
    }).join("");

    $dataBody.innerHTML = HTML;

    renderPagination();
};

// 7.1
const manageListeners = () => {
    $prevBtn.addEventListener("click", () => {
        state.pagination.page -= 1;
        paginateData();
        render();
    });

    $nextBtn.addEventListener("click", () => {
        state.pagination.page += 1;
        paginateData();
        render();
    });

    $limitSelect.addEventListener("change", (event) => {
        state.pagination.limit = event.target.value == "*" ? state.cache.length : Number(event.target.value);
        state.pagination.page = 1;
        paginateData();
        render();
    });

    $sortSelect.addEventListener("change", (event) => {
        const [key, mode] = event.target.value.split("-");
        state.sorting.key = key;
        state.sorting.mode = mode;
        paginateData();
        render();
    });

    $filterSelect.addEventListener("change", (event) => {
        const [key, mode] = event.target.value.split("-");
        state.filtering.key = key;
        state.filtering.mode = mode;
        paginateData();
        render();
    })
};

// 8
const init = async () => {
    await fetchData();
    paginateData();
    render();
    manageListeners();
};

// 9
init();