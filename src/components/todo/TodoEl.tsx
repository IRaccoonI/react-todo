import classNames from 'classnames';
import { ReactElement, useCallback, useState } from 'react';
import { Button, ButtonToolbar, InputGroup } from 'react-bootstrap';
import { ArrowDown, ArrowUp, ClipboardX } from 'react-bootstrap-icons';
import styled from 'styled-components';

interface PropsTodoEl {
  text: string;
  checked: boolean;
  remove: () => void;
  isFirst: boolean;
  isLast: boolean;
  // toggleChecked: () => void;
  moveUp: () => void;
  moveDown: () => void;
}

const TodoEl = (props: PropsTodoEl): ReactElement => {
  const [checked, setChecked] = useState(props.checked);

  const toggleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  const checkedBtnClasses = classNames('c-button', {
    'btn-success': checked,
    'btn-light': !checked,
  });

  return (
    <StyledTodoEl className="el">
      <div className="el d-flex px-2">
        <div className="">
          <Button className={checkedBtnClasses} onClick={toggleChecked} />
        </div>
        <div className="message flex-grow-1 text-start mx-4">
          <span className={checked ? 'text-decoration-line-through' : ''}>
            {props.text}
          </span>
        </div>
        <div>
          <ButtonToolbar>
            <InputGroup>
              {!props.isFirst ? (
                <Button
                  title="Todo up"
                  variant="outline-dark"
                  className={props.isLast ? 'btn-long' : ''}
                  onClick={props.moveUp}
                >
                  <ArrowUp></ArrowUp>
                </Button>
              ) : null}
              {!props.isLast ? (
                <Button
                  title="Todo down"
                  variant="outline-dark"
                  className={props.isFirst ? 'btn-long' : ''}
                  onClick={props.moveDown}
                >
                  <ArrowDown />
                </Button>
              ) : null}
              <Button
                title="Remove todo"
                variant="outline-dark"
                onClick={() => props.remove()}
              >
                <ClipboardX />
              </Button>
            </InputGroup>
          </ButtonToolbar>
        </div>
      </div>
    </StyledTodoEl>
  );
};

const StyledTodoEl = styled.div`
  .c-button {
    height: 26px;
    width: 68px;
    border: 1px solid black;
  }
  .el {
    height: 26px;
    padding: 8px 0;
    box-sizing: content-box;
    transition: background-color 0.2s linear;
  }
  .el:hover {
    background-color: rgb(255, 231, 211) !important;
  }
  .check-input {
    height: 26px;
  }
  .message {
    font-size: 1.2em;
    line-height: 26px;
  }
  .btn {
    padding: 0 5px;
  }
  .btn-long {
    width: 56px;
  }
`;

export default TodoEl;
