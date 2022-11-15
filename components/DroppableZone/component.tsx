import { FC, MouseEventHandler, useEffect, useRef, useState } from "react";
import { Props } from "./types";

const Component: FC<Props> = ({
  render,
  onDrop = () => null,
}) => {
  const dragZoneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!dragZoneRef.current) return;

    const handleDrop = (event: DragEvent) => {
      event.stopPropagation();

      onDrop(event.detail)
    }

    dragZoneRef.current.addEventListener('drop', handleDrop)

    return () => dragZoneRef.current?.removeEventListener('drop', handleDrop)
  }, [dragZoneRef, onDrop]);

  return render({
    ref: dragZoneRef,
  })
}

export default Component