import InteractiveElement from '@components/InteractiveElement'
import classNames from 'classnames'
import { ComponentType } from './component.types'
import * as styles from './component.css'

const Component: ComponentType = ({
  as = 'button',
  className,
  type = 'button',
  children,
  ...restProps
}) => (
  <InteractiveElement
    as={as}
    type={type}
    className={classNames(
      styles.wrapper,
      className,
    )}
    {...restProps}
  >
    {children}
  </InteractiveElement>
)

export default Component
