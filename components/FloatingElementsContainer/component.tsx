import { FC, PropsWithChildren, useRef, useState } from "react";
import { Props } from "./types";
import * as styles from './styles.css'
import FloatingElementsContext, { ContextProps, FloatElementPosition } from "./context";
import classNames from "classnames";

interface FloatingElementsLastPosition {
  [K: string]: FloatElementPosition,
}

const Component: FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const lastPositions = useRef<FloatingElementsLastPosition>({})

  const getElementLastPosition: ContextProps['getElementLastPosition'] = (floatId) => {
    return lastPositions.current[floatId] ?? null
  }

  const setElementLastPosition: ContextProps['setElementLastPosition'] = (floatId, position) => {
    lastPositions.current[floatId] = position
  }

  return (
    <div ref={containerRef} className={classNames(styles.wrapper, className)}>
      <FloatingElementsContext.Provider value={{ getElementLastPosition, setElementLastPosition, containerRef }}>
        {children}      
      </FloatingElementsContext.Provider>
    </div>
  )
}

export default Component