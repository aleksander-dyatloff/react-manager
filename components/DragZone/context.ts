import { createContext, Dispatch, SetStateAction } from "react";

interface ContextProps {
  dragZoneIsActive: boolean
  setDragZoneIsActive:  Dispatch<SetStateAction<boolean>>
}

const DragZoneContext = createContext<ContextProps>({
  dragZoneIsActive: false,
  setDragZoneIsActive: () => {},
});

export default DragZoneContext