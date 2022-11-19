import { color } from '@styles/helpers'
import { style } from '@vanilla-extract/css'

export const user = style({
  userSelect: 'none',
  cursor: 'pointer',
  display: 'flex',
  fontSize: 14,
  alignItems: 'center',
  padding: '0 14px 0 10px',
  height: 32,
  minHeight: 32,
  transitionProperty: 'background-color',
  transitionDuration: '120ms',
  borderRadius: 10,

  ':hover': {
    backgroundColor: color(
      'fontColor',
      0.1,
    ),
  },
})

export const userCheckbox = style({ display: 'none' })

export const searchField = style({ marginBottom: 10 })

export const icon = style({
  width: '1rem',
  height: '1rem',
  marginLeft: 6,
})

export const filterTitle = style({
  marginRight: 'auto',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

export const userDisabled = style({ color: 'gray' })

export const avatar = style({
  borderRadius: '50%',
  marginRight: 8,
  selectors: { [`${userDisabled} &`]: { filter: 'grayscale(100%)' } },
})

export const tasksFilterHeader = style({
  padding: 8,
  position: 'fixed',
  top: 0,
  left: 50,
  width: 'inherit',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 99,
  backgroundColor: color(
    'backgroundSecondary',
    0.7,
  ),
  backdropFilter: 'blur(8px) saturate(180%)',
})

export const filterColor = style({
  borderRadius: '50%',
  width: 12,
  height: 12,
  marginLeft: 4,
  marginRight: 12,
})

export const tasksFilterWrapper = style({
  position: 'relative',
  width: 260,
  height: '100vh',
})

export const tasksFilter = style({
  left: 50,
  width: 'inherit',
  height: 'inherit',
  position: 'fixed',
  overscrollBehavior: 'contain',
  padding: 8,
  paddingTop: '92px',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 60,
  backgroundColor: color('backgroundSecondary'),
  overflowY: 'auto',
})
