import { FC, PropsWithChildren } from "react";
import { Props } from "./types";
import * as styles from './styles.css';
import classNames from "classnames";

const Component: FC<PropsWithChildren<Props>> = ({
  isOpen,
  onClose,
  children
}) => {
  return (
    <div className={styles.modalWrapper}>
      <div onClick={onClose} className={classNames(styles.modalBackdrop, isOpen && styles.modalBackdropVariant.isOpen)} />
      {children}
    </div>
  )
}

export default Component