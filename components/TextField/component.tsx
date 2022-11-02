import { FC } from "react";
import { Props } from "./types";
import * as styles from './styles.css'
import classNames from "classnames";

const Component: FC<Props> = ({
  className,
  ...restProps
}) => {
  return (
    <label className={classNames(styles.wrapper, className)}>
      <input className={styles.input} {...restProps} />
    </label>
  )
}

export default Component