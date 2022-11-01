import { MouseEventHandler, MutableRefObject, ReactChild, ReactElement } from "react";

export interface RenderProps {
  isDragging: boolean
  ref: MutableRefObject<HTMLElement | null>
  onMouseDown: MouseEventHandler<HTMLElement>
}

export interface Props {
  render: (props: RenderProps) => ReactElement<any, any> | null
  value: any
}