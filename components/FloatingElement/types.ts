import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  floatId: string
  floatDuration?: number
  type?: string
  changeSizeKey?: string
  contentClassName?: string
}
