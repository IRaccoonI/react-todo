import { ReactElement } from 'react';
import { Container } from 'react-bootstrap';
import TodoCard from './todo/TodoCard';

const Todo = (): ReactElement => {
  return (
    <Container>
      <TodoCard />
    </Container>
  );
};

export default Todo;
