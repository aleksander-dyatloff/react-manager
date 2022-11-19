import { color } from '@styles/helpers'
import { style, styleVariants } from '@vanilla-extract/css'

export const wrapper = style({ marginBottom: 10 })

export const header = style({
  maxHeight: 32,
  width: '100%',
  justifyContent: 'space-between',
})

export const icon = style({
  width: 24,
  height: 24,
  transitionProperty: 'transform',
  transitionDuration: '200ms',
})

export const iconVariant = styleVariants({ isActive: [icon, { transform: 'rotate(90deg)' }] })

export const headerVariant = styleVariants({
  isActive: [header, {
    backgroundColor: `${color(
      'colorPrimary',
      0.1,
    )} !important`,
    color: color('colorPrimary'),
  }],
})

export const body = style({
  overflow: 'hidden',
  height: 0,
  transitionProperty: 'height',
  transitionDuration: '400ms',
})
