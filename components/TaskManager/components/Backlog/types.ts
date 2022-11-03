import TaskType from "@interfaces/Task"

export interface Props {
  tasks: TaskType[]
  onTasksChange?: (tasks: TaskType[]) => void
}