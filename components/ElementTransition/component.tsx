import { FC, PropsWithChildren } from 'react'
import { Props } from './types'
import * as styles from './styles.css'

const Component: FC<PropsWithChildren<Props>> = ({ children }) => (
  <div className={styles.wrapper}>
    {children}
  </div>
)

export default Component
