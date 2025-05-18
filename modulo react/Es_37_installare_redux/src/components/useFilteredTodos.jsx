import { useState, useEffect } from 'react';

function useFilteredTodos(todos, searchTerm) {
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    // Filtro i todos in base al searchTerm
    const result = todos.filter(todo =>
      todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTodos(result);
  }, [todos, searchTerm]); // Esegui l'effetto quando cambia todos o searchTerm

  return filteredTodos;
}

export default useFilteredTodos;