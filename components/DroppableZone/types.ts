import { MouseEventHandler, MutableRefObject, ReactElement } from "react"

export interface RenderProps {
  ref: MutableRefObject<HTMLDivElement | null>
}

export interface Props {
  render: (props: RenderProps) => ReactElement<any, any> | null
  onDrop?: (value: any) => void
}