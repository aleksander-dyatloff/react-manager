import TaskType from "@interfaces/Task"
import TasksColumn from "@interfaces/TasksColumn"
import TasksSpace from "@interfaces/TasksSpace"

export interface Props {
  space: TasksSpace
  columns: TasksColumn[]
  tasks: TaskType[]
  className?: string
  onTasksChange?: (tasks: TaskType[]) => void
  prevSpaceMaxTasks: number
  spaceMaxTasks: number
  onToggleOpenSpace: (spaceId: TasksSpace['id']) => void
  spaceIsOpen: boolean
}