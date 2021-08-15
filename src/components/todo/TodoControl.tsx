import React, { ReactElement, useCallback } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

interface PropsTodoControl {
  addTodo: (arg0: string) => void;
  clearTodo: () => void;
}

const TodoControl = (props: PropsTodoControl): ReactElement => {
  const [text, setText] = React.useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  }, []);

  const addTodo = useCallback(() => {
    props.addTodo(text);
    setText('');
  }, [props, text]);

  const handleEnter = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.code === 'Enter') addTodo();
    },
    [addTodo],
  );

  return (
    <StyledTodoControl>
      <InputGroup className="rounded-0 rounded-top">
        <FormControl
          v-model="newTodoMsg"
          className="rounded-0"
          value={text}
          onChange={handleChange}
          onKeyDown={handleEnter}
        ></FormControl>
        <Button variant="success" className="px-3 rounded-0" onClick={addTodo}>
          Add
        </Button>
        <Button
          variant="warning"
          className="w-100 rounded-0"
          onClick={props.clearTodo}
        >
          Clear
        </Button>
      </InputGroup>
    </StyledTodoControl>
  );
};

const StyledTodoControl = styled.div``;

export default TodoControl;
