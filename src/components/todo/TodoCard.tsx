import React, { ReactElement, useCallback } from 'react';
import styled from 'styled-components';
import TodoControl from './TodoControl';

import TodoEl from './TodoEl';

interface Todo {
  id: number;
  text: string;
  checked: boolean;
}

const TodoCard = (): ReactElement => {
  // const [];
  const [todos, setTodos] = React.useState([] as Todo[]);
  const [countTodo, setCountTodo] = React.useState(0);

  const addTodo = useCallback(
    (text: string): void => {
      setTodos(
        todos.concat({
          id: countTodo,
          text: text,
          checked: false,
        }),
      );
      setCountTodo((count) => count + 1);
    },
    [todos, countTodo],
  );

  const clearTodo = useCallback(() => {
    setTodos([]);
  }, []);

  const removeTodo = useCallback((id: number): void => {
    setTodos((curTodos) => curTodos.filter((todo) => todo.id !== id));
  }, []);

  const moveTodo = useCallback(
    (ind: number, offset: number) => {
      if (ind + offset < 0 || ind + offset === todos.length) return;
      setTodos((curTodos) => {
        // clone todos
        let cloneTodos = [...curTodos];
        // swap todos elements
        let save = cloneTodos[ind];
        cloneTodos[ind] = cloneTodos[ind + offset];
        cloneTodos[ind + offset] = save;
        return cloneTodos;
      });
    },
    [todos],
  );

  return (
    <StyledTodoCard>
      <div className="header rounded-top border border-bottom-0">
        <h2>Todos</h2>
      </div>
      <TodoControl addTodo={addTodo} clearTodo={clearTodo} />
      <div className="el-wrapper">
        {todos.map((todo, ind) => (
          <TodoEl
            key={todo.id}
            text={todo.text}
            checked={todo.checked}
            isFirst={ind === 0}
            isLast={ind === todos.length - 1}
            remove={() => removeTodo(todo.id)}
            moveDown={() => moveTodo(ind, 1)}
            moveUp={() => moveTodo(ind, -1)}
          />
        ))}
      </div>
    </StyledTodoCard>
  );
};

const StyledTodoCard = styled.div`
  .header {
    background-color: rgb(238, 255, 239);
    text-align: center;
  }
  .header > h2 {
    height: 60px;
    line-height: 60px;
    margin-bottom: 0;
  }
  .el-wrapper > *:nth-of-type(2n) {
    background: rgba(122, 122, 122, 0.123);
  }
  .el-wrapper > *:nth-of-type(2n + 1) {
    background: rgba(218, 218, 218, 0.11);
  }
  .rounded-be-0 {
    border-bottom-right-radius: 0 !important;
  }
  .rounded-bs-0 {
    border-bottom-left-radius: 0 !important;
  }
`;

export default TodoCard;
