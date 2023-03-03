import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import Portal from './Portal';
import useLockBodyScroll from '../../hooks/useLockScroll';
import useOutsideClick from '../../hooks/useOutsideClick';

const Wrapper = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const ModalContainer = styled.div`
  position: relative;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 5rem;
  z-index: 2;
  background-color: var(--color-background);
  border-radius: 1rem;
  z-index: 2;
  max-height: 100vh;

  & *:nth-child(2) {
    overflow-y: auto;
  }

  @media only screen and (max-width: 480px) {
    padding: 1.5rem 1.5rem;
    width: 100%;
    border-radius: 0;

    /* max-height: 100vh; */
    /* & *:nth-child(2) {
      overflow-y: auto;
    } */
  }
`;

const CloseButton = styled(IoClose)`
  position: absolute;
  top: 0;
  right: 0;
  color: var(--color-text);
  font-size: 2.5rem;
  cursor: pointer;
  margin: 0.7rem 0.7rem 0 0;
`;

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export default function Modal({ isOpen, setIsOpen, children }) {
  const ref = useOutsideClick(() => setIsOpen(false));

  useLockBodyScroll();

  return (
    <AnimatePresence>
      {isOpen && (
        <Portal fullHeight>
          <Wrapper
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Backdrop />
            <ModalContainer ref={ref}>
              <CloseButton onClick={() => setIsOpen(false)} />
              <div>{children}</div>
            </ModalContainer>
          </Wrapper>
        </Portal>
      )}
    </AnimatePresence>
  );
}
