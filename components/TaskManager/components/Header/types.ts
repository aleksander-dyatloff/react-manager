import { Task } from "../../../Task/types";
import { Column } from "../TasksSpace/types";

export interface Props {
  columns: Column[]
  tasks: Task[]
  isAltVariant?: boolean
}