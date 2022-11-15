import TaskType from "@interfaces/Task";
import TasksColumn from "@interfaces/TasksColumn";
import TasksSpace from "@interfaces/TasksSpace";
import TaskUserType from "@interfaces/TaskUser";
import TaskVariant from "@interfaces/TaskVariant";
import { createContext } from "react";

interface ContextProps {
  tasks: TaskType[]
  users: TaskUserType[]
  usersMap: {
    [K: TaskUserType['id']]: TaskUserType
  }
  columns: TasksColumn[]
  columnsMap: {
    [K: TasksColumn['id']]: TasksColumn  
  }
  spaces: TasksSpace[]
  spacesMap: {
    [K: TasksSpace['id']]: TasksSpace    
  }
  existUsers: TaskUserType['id'][]
  setExistUsers: (userIds: TaskUserType['id'][]) => void
  taskTypes: TaskVariant[],
  existTaskTypes: TaskVariant['id'][]
  setExistTaskTypes: (varIds: TaskUserType['id'][]) => void
  openedTask: TaskType | null
  openTask: (taskId: TaskType | null) => void
}

const TasksTableContext = createContext<ContextProps>({
  tasks: [],
  users: [],
  columns: [],
  spaces: [],
  spacesMap: {},
  columnsMap: {},
  usersMap: {},
  existUsers: [],
  setExistUsers: () => {},
  taskTypes: [],
  existTaskTypes: [],
  setExistTaskTypes: () => {},
  openedTask: null,
  openTask: () => {},
})

export default TasksTableContext