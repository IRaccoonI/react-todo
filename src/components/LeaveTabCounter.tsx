import { useState, ReactElement, useEffect } from 'react';
import { Container } from 'react-bootstrap';
// import { useDocumentVisibility } from 'document-focus-counter';

function useDocumentVisibility(): [number, boolean] {
  const [count, setCount] = useState(0);
  const [visibility, setVisibility] = useState(true);

  useEffect(() => {
    const onFocus = () => {
      setCount((c) => c + 1);
      setVisibility(true);
    };
    const onBlur = () => setVisibility(false);

    window.addEventListener('focus', onFocus);
    window.addEventListener('blur', onBlur);

    return () => {
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('blur', onBlur);
    };
  }, []);

  return [count, visibility];
}

const LeaveTabCounter = (): ReactElement => {
  const [count, isVisible] = useDocumentVisibility();

  return (
    <Container>
      <span>
        Вы покинули страницу: {count}. раз {isVisible.toString()}
      </span>
    </Container>
  );
};

export default LeaveTabCounter;
