import { MouseEventHandler, MutableRefObject, ReactElement } from "react"

export interface RenderProps {
  ref: MutableRefObject<HTMLDivElement | null>
  onMouseEnter: MouseEventHandler<HTMLDivElement>
  onMouseLeave: MouseEventHandler<HTMLDivElement>
  inFocus: boolean
}

export interface Props {
  render: (props: RenderProps) => ReactElement<any, any> | null
  onDrop?: (value: any) => void
}