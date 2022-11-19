import Element from '@components/Element'
import getMousePositionRelativeToParentElement from '@utils/getMousePositionRelativeToParentElement'
import classNames from 'classnames'
import { useRef } from 'react'
import * as styles from './component.css'
import { ComponentType, Materials } from './component.types'

const Component: ComponentType = ({
  as, children, material = Materials.Glass, className, ...restProps
}) => {
  const highlightRef = useRef<HTMLSpanElement | null>(null)

  return (
    <Element
      as={as}
      className={classNames(
        styles.wrapper,
        styles.wrapperVariant[material],
        className,
      )}
      onMouseMove={(event) => {
        if (!highlightRef.current) return

        const mousePosition = getMousePositionRelativeToParentElement(
          event,
          event.currentTarget,
        )

        const currentTargetHigherSize = Math.max(
          event.currentTarget.clientHeight,
          event.currentTarget.clientWidth,
        )

        highlightRef.current.style.height = `${currentTargetHigherSize}px`
        highlightRef.current.style.width = `${currentTargetHigherSize}px`
        highlightRef.current.style.top = `${mousePosition.y - highlightRef.current.clientHeight / 2}px`
        highlightRef.current.style.left = `${mousePosition.x - highlightRef.current.clientWidth / 2}px`
      }}
      {...restProps}
    >
      {material === Materials.Glass && (
        <span
          ref={highlightRef}
          className={styles.highlight}
        />
      )}
      {children}
    </Element>
  )
}

Component.material = Materials

export default Component
