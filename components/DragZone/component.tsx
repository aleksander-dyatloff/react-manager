import { FC, useEffect, useRef, useState } from "react";
import DragZoneContext from "./context";
import { Props } from "./types";

const Component: FC<Props> = ({
  render,
}) => {
  const [dragZoneIsActive, setDragZoneIsActive] = useState(false);
  const dragZoneRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!dragZoneRef.current) return

    const handleDrop = (event: DragEvent) => {
      const { value: task, itemStartPosition } = event.detail as any
      const taskId: string = task.id

      //const realElement = document.getElementById(taskId);

      //if (!realElement) return

      //realElement.style.top = itemStartPosition.top + 'px';
      //realElement.style.left = itemStartPosition.left + 'px';
      //realElement.style.width = itemStartPosition.width + 'px';
      //realElement.style.height = itemStartPosition.height + 'px';
    }

    dragZoneRef.current.addEventListener('drop', handleDrop, {
      capture: true
    })

    return () => dragZoneRef.current?.removeEventListener('drop', handleDrop)
  }, [dragZoneRef]);

  return (
    <DragZoneContext.Provider value={{ dragZoneIsActive, setDragZoneIsActive }}>
      {render({ ref: dragZoneRef })}
    </DragZoneContext.Provider>
  )
}

export default Component