import TaskType from "@interfaces/Task";
import TasksColumn from "@interfaces/TasksColumn";

export interface Props {
  columns: TasksColumn[]
  tasks: TaskType[]
}