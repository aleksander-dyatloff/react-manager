import { StaticImageData } from "next/image"

interface TaskUserType {
  id: string
  firstName: string
  lastName: string
  avatar: StaticImageData
}

export default TaskUserType