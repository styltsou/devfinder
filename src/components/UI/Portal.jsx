import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Overlay = styled.div`
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: ${props => (props.fullHeight ? '100%' : 'auto')};
  z-index: 10000;
`;

export default function Portal({ children, fullHeight }) {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      ref.current = document.querySelector('#portal');
      setMounted(true);
    }
  }, []);

  return mounted && ref.current
    ? createPortal(
        <Overlay fullHeight={fullHeight}>{children}</Overlay>,
        ref.current
      )
    : null;
}
