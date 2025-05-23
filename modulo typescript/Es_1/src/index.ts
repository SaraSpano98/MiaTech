// ESERCIZIO: Implementare l'interfaccia Todo
import { Todo, User, TodoWithMetadata, Project } from './types';

// Array di base
const todos: Todo[] = [];
const users: User[] = [];

// ESERCIZIO: aggiungere una funzione per aggiungere un Todo
let newId = 1;
function addTodo(object: { title: string; metadata?: string | object }): Todo {
  const newTodo: Todo = {
    id: newId++,
    title: object.title,
    completed: false,
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