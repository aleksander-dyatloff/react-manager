import { color } from "@styles/helpers";
import { style, styleVariants } from "@vanilla-extract/css";

export const wrapper = style({
  marginBottom: 10,
})

export const header = style({
  border: 'none',
  backgroundColor: 'transparent',
  padding: '0 10px',
  borderRadius: 10,
  height: 32,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: 'inherit',
  fontSize: 16,
  cursor: 'pointer',
  width: '100%',
  transitionProperty: 'background-color, color',
  transitionDuration: '200ms',

  ':hover': {
    backgroundColor: color('fontColor', 0.1),
  },
})

export const icon = style({
  width: 24,
  height: 24,
  transitionProperty: 'transform',
  transitionDuration: '200ms',
})

export const iconVariant = styleVariants({
  isActive: [icon, {
    transform: 'rotate(90deg)',
  }],
})

export const headerVariant = styleVariants({
  isActive: [header, {
    backgroundColor: `${color('colorPrimary', 0.1)} !important`,
    color: color('colorPrimary'),
  }],
})

export const body = style({
  overflow: 'hidden',
  height: 0,
  transitionProperty: 'height',
  transitionDuration: '400ms',
})