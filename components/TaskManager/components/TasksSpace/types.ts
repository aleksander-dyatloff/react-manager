import { Task } from "../../../Task/types"

export interface TasksSpace {
  id: string | number
  title: string
}

export interface Column {
  id: string | number
  title: string
}

export interface Props {
  space: TasksSpace
  columns: Column[]
  tasks: Task[]
  className?: string
  onTasksChange?: (tasks: Task[]) => void
  prevSpaceMaxTasks: number
  spaceMaxTasks: number
  onToggleOpenSpace: (spaceId: TasksSpace['id']) => void
  spaceIsOpen: boolean
}