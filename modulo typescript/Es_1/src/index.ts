// ESERCIZIO: Implementare l'interfaccia Todo
import { Todo, TodoWithMetadata, Project, TodoStatus, User} from './types';

// Array di base
const todos: Todo[] = [];
const users: User[] = [];

// ESERCIZIO: aggiungere una funzione per aggiungere un Todo
let newId = 1;
function addTodo(object: { title: string; metadata?: string | object }): Todo {
  const newTodo: Todo = {
    id: newId++,
    title: object.title,
    //completed: false,
    status: TodoStatus.Pending, //ESERCIZIO: aggionare funzione per impostare il status su Pending, per il nuovo todo creato. 
    metadata: object.metadata,
  };

  todos.push(newTodo);
  return newTodo;
}

// Esempi
addTodo({ title: "Studiare TypeScript", metadata: { createdAt: new Date() } });
addTodo({ title: "Fare la spesa", metadata: "aggiunto manualmente" });

// ESERCIZIO: associare Todo con Utenti
function assignTodoToUser(todoId: number, userId: number): Todo | string {
  const todo = todos.find(t => t.id === todoId);
  if (!todo) {
    return `Todo con id ${todoId} non trovato.`;
  }

  const user = users.find(u => u.id === userId);
  if (!user) {
    return `User con id ${userId} non trovato.`;
  }

  todo.userId = userId;
  return todo;
}

// ESERCIZIO: Creare una funzione per ottenere i Todo di un utente
function getUserTodos(userId: number): Todo[] {
  return todos.filter(todo => todo.userId === userId);
}


// ESERCIZIO: aggiornare lo stato dei Todo
function updateTodoStatus(todoId: number, status: TodoStatus): Todo | string {
  const todo = todos.find(t => t.id === todoId);
  if (!todo) {
    return `Todo con id ${todoId} non trovato.`;
  }

  todo.status = status;
  return todo;
}
//Esempio: 
updateTodoStatus(1, TodoStatus.Completed);


// ESERCIZIO: Gestione degli errori con Never
function error(message: string): never {
  throw new Error(message);
}

// ESERCIZIO: Gestione dei tipi dinamici con unknown
function parseInput(input: unknown): string {
  if (typeof input === 'string') return input;
  if (typeof input === 'number') return input.toString();
  return error('Tipo di input non supportato');
}

// ESERCIZIO: creare tipi derivati con extends (TodoWithMetadata)
const advancedTodo: TodoWithMetadata = {
  id: newId++,
  title: 'Studiare interfacce avanzate',
  completed: false,
  metadata: {
    createdAt: new Date(),
    source: 'app web',
  },
};

todos.push(advancedTodo);

// ESERCIZIO: utilizzare tipi utility (Partial)
function updateTodo(id: number, updates: Partial<Todo>): Todo | string {
  const todo = todos.find(t => t.id === id);
  if (!todo) return `Todo con id ${id} non trovato.`;

  Object.assign(todo, updates);
  return todo;
}

// ESERCIZIO: utilizzare tuple
function getTodoSummary(todo: Todo): [string, boolean] {
  return [todo.title, todo.completed];
}

const summary = getTodoSummary(todos[0]);
console.log('Riepilogo Todo:', summary);

// ESERCIZIO: finalizzare il progetto
function createProject(users: User[], todos: Todo[]): Project {
  return { users, todos };
}

const project = createProject(users, todos);
console.log('Progetto creato:', project);


//ESERCIZIO: creazione istanze della classe User e utlizza il metodo addTodo per aggiungere Todo agli utenti

const user1 = new User(1, 'Mario Rossi', 'mario@example.com');
const user2 = new User(2, 'Anna Bianchi', 'annabianchi@example.com');

users.push(user1, user2);

const todoA: Todo = {
  id: newId++,
  title: 'Leggere la documentazione TypeScript',
  status: TodoStatus.Pending,
  metadata: { createdAt: new Date() },
};

const todoB: Todo = {
  id: newId++,
  title: 'Comprare il pane',
  status: TodoStatus.Pending,
  metadata: 'nota veloce',
};

user1.addTodo(todoA);
user2.addTodo(todoB);

todos.push(todoA, todoB);

console.log('Todos di Mario Rossi:', user1.todos);
console.log('Todos di Anna Bianchi:', user2.todos);



// ESERCIZIO: aggiornare parzialmente un Todo con tipo mappato
type PartialTodo = Partial<Todo>;

function updatePartialTodo(todoId: number, updates: PartialTodo): Todo | string {
  const todo = todos.find(t => t.id === todoId);
  if (!todo) {
    return `Todo con id ${todoId} non trovato.`;
  }

  Object.assign(todo, updates);
  return todo;
}

// ESEMPIO: Aggiorna solo il titolo del todo con ID 1
const updated = updatePartialTodo(1, {
  title: 'Titolo aggiornato con PartialTodo'
});
console.log('Todo aggiornato parzialmente:', updated);


//ESERCIZIO: tipo TodoRecord che mappa number(id del todo) a Todo e creazione di funzione convertArrayToRecord 

type TodoRecord = {
  [id: number]: Todo;
};

function convertArrayToRecord(todosArray: Todo[]): TodoRecord {
  return todosArray.reduce((acc, todo) => {
    acc[todo.id] = todo;
    return acc;
  }, {} as TodoRecord);
}

// Esempio di utilizzo
const todosRecord = convertArrayToRecord(todos);
console.log('Todos come record:', todosRecord);
