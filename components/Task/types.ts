import TaskType from "@interfaces/Task"
import { MouseEventHandler } from "react"

export interface Props {
  isElevating?: boolean
  isDragging?: boolean
  task: TaskType
  className?: string
  onClick?: () => void
  onMouseDown?: MouseEventHandler<HTMLElement>
}