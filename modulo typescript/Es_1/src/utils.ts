//ESERCIZIO: Definisci una funzione generica filterTodos che accetta un array di Todo e una funzione di filtro e restituisce un array di todo filtrati.

import { Todo } from "./types";

export function filterTodos(todos: Todo[], filterFn: (todo: Todo) => boolean): Todo [] {
    return todos.filter(filterFn);
}