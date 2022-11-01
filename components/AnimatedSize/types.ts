import { HTMLAttributes } from "react"

export interface Props extends HTMLAttributes<HTMLDivElement> {
  animateDirections: 'x' | 'y' | 'xy'
  rightRect: 'wrapper' | 'content'
  order: string
}