import { ImageProps, StaticImageData } from "next/image"
import { MouseEventHandler } from "react"
import { Column, TasksSpace } from "../TaskManager/components/TasksSpace/types"

export interface Task {
  id: string
  spaceId: TasksSpace['id']
  columnId: Column['id']
  title: string
  description?: string
  assigner?: {
    firstName: string
    lastName: string
    avatar: StaticImageData
  }
  estimateTime?: number
  remainingTime?: number
  type?: number
  priority?: 1 | 2 | 3
  tags?: string[]
}

export interface Props {
  isElevating?: boolean
  isDragging?: boolean
  task: Task
  className?: string
  onClick?: () => void
  onMouseDown?: MouseEventHandler<HTMLElement>
  isAltVariant?: boolean
}