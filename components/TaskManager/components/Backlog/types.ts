import { Task } from "../../../Task/types";

export interface Props {
  tasks: Task[]
  onTasksChange?: (tasks: Task[]) => void
}