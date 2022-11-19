import { AllHTMLAttributes, FC, PropsWithChildren } from 'react'

export type Props = AllHTMLAttributes<HTMLElement>

export type ComponentType = FC<PropsWithChildren<Props>>
