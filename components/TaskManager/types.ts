import TaskType from "@interfaces/Task"
import TasksColumn from "@interfaces/TasksColumn"
import TasksSpace from "@interfaces/TasksSpace"

export interface Props {
  tasks?: TaskType[]
  columns?: TasksColumn[]
  spaces?: TasksSpace[]
  onTasksChange?: (tasks: TaskType[]) => void
  onTaskSelect?: (task: TaskType) => void
  closedSpaces: Array<TasksSpace['id']>
  toggleCloseSpace: (spaceId: TasksSpace['id']) => void
}