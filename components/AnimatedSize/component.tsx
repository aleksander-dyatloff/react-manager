import { FC, PropsWithChildren, useEffect, useRef } from "react";
import { Props } from "./types";
import * as styles from './styles.css'
import classNames from "classnames";

const Component: FC<PropsWithChildren<Props>> = ({
  rightRect,
  animateDirections,
  order,
  children,
  className,
  ...restProps
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current
    const content = contentRef.current

    if (!wrapper || !content) return;

    setTimeout(() => {
    if (animateDirections.includes('x')) {
      if (rightRect === 'wrapper') {
        content.style.width = wrapper.clientWidth + 'px'
      } else {
        wrapper.style.width = content.clientWidth + 'px'      
      }
    }

    if (animateDirections.includes('y')) {
      if (rightRect === 'wrapper') {
        content.style.height = wrapper.clientHeight + 'px'
      } else {
        wrapper.style.height = content.clientHeight + 'px'      
      }
    }
    })
  }, [order, animateDirections, rightRect])

  return (
    <div ref={wrapperRef} className={classNames(styles.wrapper, className)} {...restProps}>
      <div ref={contentRef} className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default Component