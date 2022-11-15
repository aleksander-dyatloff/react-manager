import { FC, PropsWithChildren, useEffect, useState } from "react";
import { Props } from "./types";
import * as styles from './styles.css';
import classNames from "classnames";

const Component: FC<PropsWithChildren<Props>> = ({
  isOpen,
  onClose,
  children
}) => {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Alt') {
        setIsBlurred(true)
      }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'Alt') {
        setIsBlurred(false)
      } else if (event.key === 'Escape') {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);    
    }
  }, [isOpen, onClose]);

  return (
    <div className={classNames(
      styles.modalWrapper,
      isOpen && styles.modalWrapperVariant.isOpen,
      isBlurred && styles.modalWrapperVariant.isBlurred,
      )}
    >
      <div onClick={onClose} className={classNames(
        styles.modalBackdrop,
        isOpen && styles.modalBackdropVariant.isOpen,
        isBlurred && styles.modalBackdropVariant.isBlurred,
        )}
      />
      {children}
    </div>
  )
}

export default Component