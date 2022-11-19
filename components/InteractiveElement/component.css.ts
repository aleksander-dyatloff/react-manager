import { color } from '@styles/helpers'
import { style, styleVariants } from '@vanilla-extract/css'
import { Materials } from './component.types'

export const wrapper = style({
  position: 'relative',
  overflow: 'hidden',
  outline: 'none',
  cursor: 'pointer',
})

export const wrapperVariant = styleVariants({
  [Materials.Glass]: [wrapper, {
    backgroundColor: 'transparent',
    transitionProperty: 'background-color',
    transitionDuration: '260ms',

    selectors: {
      '&:hover, &:focus': {
        backgroundColor: color(
          'colorPrimary',
          0.15,
        ),
      },
      '&:active': {
        backgroundColor: color(
          'colorPrimary',
          0.25,
        ),
      },
    },
  }],
  [Materials.Object]: [wrapper, { backgroundColor: 'green' }],
})

export const highlight = style({
  position: 'absolute',
  background: `radial-gradient(circle, ${color(
    'colorPrimary',
    0.25,
  )} 0%, ${color(
    'colorPrimary',
    0,
  )} 70%)`,
  borderRadius: '50%',
  opacity: 0,
  transform: 'scale(0)',
  transitionProperty: 'opacity, transform, background',
  transitionDuration: 'inherit',
  selectors: {
    [`${wrapper}:hover &`]: {
      opacity: 1,
      transform: 'scale(1)',
    },
  },
})
