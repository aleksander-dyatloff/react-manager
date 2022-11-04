import { StaticImageData } from "next/image"

interface TaskUserType {
  id: string
  firstName: string
  lastName: string
  color?: string
  avatar?: StaticImageData
}

export default TaskUserType