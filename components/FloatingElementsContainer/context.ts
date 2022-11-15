import { createContext, MutableRefObject } from "react";

export interface FloatElementPosition {
  top: number
  left: number
  width: number
  height: number
}

export interface ContextProps {
  containerRef: MutableRefObject<HTMLDivElement | null>
  getElementLastPosition: (floatId: string) => null | FloatElementPosition
  setElementLastPosition: (floatId: string, position: FloatElementPosition) => void
}

const FloatingElementsContext = createContext<ContextProps>({
  containerRef: { current: null },
  getElementLastPosition: () => null,
  setElementLastPosition: () => null,
});

export default FloatingElementsContext