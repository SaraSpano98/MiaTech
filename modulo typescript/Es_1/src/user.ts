// ESERCIZIO: costruttore per l'utente
import {Todo} from './types';

export class User {
    id: number;
    name: string;
    email: string;

    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // ESERCIZIO: aggiungere un metodo addTodo alla classe User che accetta un todo e lo aggiunge all'array todos
    todos: Todo[] = [];
    addTodo(todo: Todo) : void {
        this.todos.push(todo);
    }
}

