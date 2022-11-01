import { MutableRefObject, ReactElement } from "react";

export interface RenderProps {
  ref: MutableRefObject<HTMLElement | null>
}

export interface Props {
  render: (props: RenderProps) => ReactElement<any, any> | null
}