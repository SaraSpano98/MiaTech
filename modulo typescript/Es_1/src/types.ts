// ESERCIZIO: creare un'interfaccia Todo
export interface Todo {
  id: number;
  title: string;
  //completed: boolean;
  status: TodoStatus; //ESERCIZIO: utilizzare un Enum per lo stato del Todo.
  userId?: number; // ESERCIZIO: associare Todo con Utenti
  metadata?: string | object; // ESERCIZIO: utilizzare il tipo any / utilizzare tipi unions
}

// ESERCIZIO: creare un'interfaccia utente
export interface User {
  id: number;
  name: string;
  email: string;
  readonly todos: readonly Todo[]; // ESERCIZIO: utilizzare array readonly
}

// ESERCIZIO: creare tipi derivati con extends
export interface TodoWithMetadata extends Todo {
  metadata: {
    createdAt: Date;
    updatedAt?: Date;
    [key: string]: any; // ESERCIZIO: utilizzare il tipo any
  };
}

// ESERCIZIO: finalizzare il progetto
export interface Project {
  users: User[];
  todos: Todo[];
}

// ESERCIZIO: Enum TodoStatus
export enum TodoStatus {
  Pending = 'Pending',
  InProgress = 'InProgress',
  Completed = 'Completed',
}

