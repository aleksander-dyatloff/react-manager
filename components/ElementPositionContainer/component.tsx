import { FC, PropsWithChildren, useRef } from "react";
import { Props } from "./types";
import * as styles from './styles.css'
import classNames from "classnames";
import ElementPositionContainerContext from "./context";

const Component: FC<PropsWithChildren<Props>> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement | null>(null)

  return (
    <div ref={ref} className={classNames(styles.wrapper, className)}>
      <ElementPositionContainerContext.Provider value={{ ref }}>
        {children}      
      </ElementPositionContainerContext.Provider> 
    </div>
  )
}

export default Component