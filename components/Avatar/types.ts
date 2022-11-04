import { StaticImageData } from "next/image"
import { AllHTMLAttributes } from "react"

export interface Props extends AllHTMLAttributes<HTMLImageElement> {
  alt: string
  color?: string
  image?: StaticImageData
}