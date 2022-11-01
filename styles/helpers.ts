import { theme } from "./theme.css"

export const color = (color: keyof typeof theme.color, opacity?: number) => {
  if (typeof opacity === 'number') {
    return `rgba(${theme.color[color]}, ${opacity})`;
  }

  return `rgb(${theme.color[color]})`;
}