import { MouseEvent } from 'react'

const getMousePositionRelativeToParentElement = (
  mouseEvent: MouseEvent,
  relativeElement: HTMLElement,
) => {
  const elementRect = relativeElement.getBoundingClientRect()

  return {
    x: mouseEvent.clientX - elementRect.x,
    y: mouseEvent.clientY - elementRect.y,
  }
}

export default getMousePositionRelativeToParentElement
