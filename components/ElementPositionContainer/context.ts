import { createContext, MutableRefObject, ReactNode } from "react";

interface ContextProps {
  ref: MutableRefObject<HTMLDivElement | null>
}

const ElementPositionContainerContext = createContext<ContextProps>({
  ref: { current: null },
});

export default ElementPositionContainerContext