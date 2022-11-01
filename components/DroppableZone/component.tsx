import { FC, MouseEventHandler, useEffect, useRef, useState } from "react";
import { Props } from "./types";

const Component: FC<Props> = ({
  render,
  onDrop = () => null,
}) => {
  const [dragZoneInFocus, setDragZoneInFocus] = useState(false);
  const dragZoneRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter: MouseEventHandler<HTMLElement> = () => {
    setDragZoneInFocus(true)
  }

  const handleMouseLeave: MouseEventHandler<HTMLElement> = () => {
    setDragZoneInFocus(false)  
  }
  
  useEffect(() => {
    if (!dragZoneRef.current) return;

    const handleDrop = (event: DragEvent) => {
      event.preventDefault();

      onDrop(event.detail)
    }

    dragZoneRef.current.addEventListener('drop', handleDrop)

    return () => dragZoneRef.current?.removeEventListener('drop', handleDrop)
  }, [dragZoneRef, onDrop]);

  return render({
    ref: dragZoneRef,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    inFocus: dragZoneInFocus
  })
}

export default Component