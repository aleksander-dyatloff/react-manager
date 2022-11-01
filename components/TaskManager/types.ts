import { Task } from "../Task/types"
import { Column, TasksSpace } from "./components/TasksSpace/types"

export interface Props {
  tasks?: Task[]
  columns?: Column[]
  spaces?: TasksSpace[]
  onTasksChange?: (tasks: Task[]) => void
  onTaskSelect?: (task: Task) => void
  closedSpaces: Array<TasksSpace['id']>
  toggleCloseSpace: (spaceId: TasksSpace['id']) => void
  isAltVariant?: boolean
}