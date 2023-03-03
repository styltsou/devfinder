import { motion, AnimatePresence } from 'framer-motion';

const Wrapper = styled(motion.div)``;

const Modal = ({ isOpen, setIsOpen, children }) => {
  return (
    <AnimatePresence>{isOpen && <Wrapper>{children}</Wrapper>}</AnimatePresence>
  );
};

export default Modal;
