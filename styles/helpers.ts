/* eslint-disable import/prefer-default-export */
import { theme } from './theme.css'

export const color = (colorName: keyof typeof theme.color, opacity?: number) => {
  if (typeof opacity === 'number') {
    return `rgba(${theme.color[colorName]}, ${opacity})`
  }

  return `rgb(${theme.color[colorName]})`
}
