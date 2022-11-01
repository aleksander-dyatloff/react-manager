import { FC, MouseEventHandler, useContext, useRef, useState } from "react";
import ElementPositionContainerContext from "../ElementPositionContainer/context";
import { Props } from "./types";

const Component: FC<Props> = ({ render, value }) => {
  const [isDragging, setIsDragging] = useState(false);
  const dragItemRef = useRef<HTMLElement | null>(null);
  const { ref: relativeContainerRef } = useContext(ElementPositionContainerContext);

  const handleMouseDown: MouseEventHandler<HTMLElement> = (startEvent) => {
    if (!dragItemRef.current) return;

    const mouseDownTime = Date.now();

    setIsDragging(true);

    const dragItemRect = dragItemRef.current.getBoundingClientRect();

    dragItemRef.current.style.position = 'fixed';
    dragItemRef.current.style.width = dragItemRect.width / 1.05 + 'px';
    dragItemRef.current.style.height = dragItemRect.height / 1.05 + 'px';
    dragItemRef.current.style.top = dragItemRect.y + 2.5 + 'px';
    dragItemRef.current.style.left = dragItemRect.x + 4 + 'px';
    dragItemRef.current.style.zIndex = '20';

    const mouseRangeFromItemRect = {
      x: startEvent.clientX - dragItemRect.left - 2.5,
      y: startEvent.clientY - dragItemRect.top - 4,
    }

    const handleMouseMove = (moveEvent: HTMLElementEventMap['mousemove']) => {
      const moveMousePosition = {
        x: moveEvent.clientX,
        y: moveEvent.clientY,
      }

      if (!dragItemRef.current) return

      dragItemRef.current.style.top = moveMousePosition.y - mouseRangeFromItemRect.y + 'px';
      dragItemRef.current.style.left = moveMousePosition.x - mouseRangeFromItemRect.x + 'px';
    }

    const handleMouseUp = (endEvent: HTMLElementEventMap['mouseup']) => {
      setIsDragging(false)

      const mouseUpTime = Date.now();

      if (mouseUpTime - mouseDownTime < 120) {
        if (!dragItemRef.current) return

        const clickEvent = new Event('click');

        dragItemRef.current.dispatchEvent(clickEvent);

        document.body.removeEventListener('mousemove', handleMouseMove);
        document.body.removeEventListener('mouseup', handleMouseUp);

        return
      }

      const deepElement = document.elementFromPoint(endEvent.clientX, endEvent.clientY);

      if (!deepElement || !dragItemRef.current || !relativeContainerRef.current) return;

      const dragItemRect = dragItemRef.current.getBoundingClientRect();
      const relativeContainerRect = relativeContainerRef.current.getBoundingClientRect();

      dragItemRef.current.style.position = 'absolute';
      dragItemRef.current.style.width = dragItemRect.width / 1.05 + 'px';
      dragItemRef.current.style.height = dragItemRect.height / 1.05 + 'px';
      dragItemRef.current.style.top = dragItemRect.y - relativeContainerRect.y + 2.5 + 'px';
      dragItemRef.current.style.left = dragItemRect.x - relativeContainerRect.x + 4 + 'px';
      dragItemRef.current.style.zIndex = '20';

      const event = new CustomEvent('drop', { detail: {
        value,
        itemStartPosition: dragItemRect,
      } })

      deepElement.dispatchEvent(event);

      if (!dragItemRef.current) return;

      document.body.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseup', handleMouseUp);
    }

    document.body.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseup', handleMouseUp);
  }

  return render({ isDragging, ref: dragItemRef, onMouseDown: handleMouseDown });
}

export default Component