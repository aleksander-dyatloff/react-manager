import { FC } from "react";
import { Props } from "./types";
import * as styles from './styles.css'

const Component: FC<Props> = ({
  ...restProps
}) => {
  return (
    <label className={styles.wrapper}>
      <input className={styles.input} {...restProps} />
    </label>
  )
}

export default Component