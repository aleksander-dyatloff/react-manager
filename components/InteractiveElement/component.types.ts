import { AllHTMLAttributes, FC, PropsWithChildren } from 'react'

export enum Materials {
  Glass,
  Object,
}

export interface Props extends AllHTMLAttributes<HTMLElement> {
  material?: Materials
}

export interface ComponentType extends FC<PropsWithChildren<Props>> {
  material: typeof Materials
}
