import TasksColumn from "./TasksColumn"
import TasksSpace from "./TasksSpace"
import TaskUserType from "./TaskUser"
import TaskVariant from "./TaskVariant"

interface TaskType {
  id: string
  assignerId: TaskUserType['id']
  spaceId: TasksSpace['id']
  columnId: TasksColumn['id']
  title: string
  description?: string
  estimateTime?: number
  remainingTime?: number
  typeId: TaskVariant['id']
  priority?: 1 | 2 | 3
  tags?: string[]
}

export default TaskType