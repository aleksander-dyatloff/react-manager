import { color } from "@styles/helpers"
import { style } from "@vanilla-extract/css"

export const user = style({
  userSelect: 'none',
  cursor: 'pointer',
  display: 'flex',
  fontSize: 14,
  alignItems: 'center',
  padding: '0 8px',
  height: 32,
  transitionProperty: 'background-color',
  transitionDuration: '120ms',
  borderRadius: 10,

  ':hover': {
    backgroundColor: color('backgroundMain'),
  }
})

export const userCheckbox = style({
  display: 'none',
})

export const searchField = style({
  marginBottom: 10,
})

export const icon = style({
  width: '1rem',
  height: '1rem',
  marginLeft: 'auto',
  color: 'gray',
})

export const userDisabled = style({
  color: 'gray',
})

export const avatar = style({
  borderRadius: '50%',
  marginRight: 8,
  selectors: {
    [`${userDisabled} &`]: {
      filter: 'grayscale(100%)',
    },
  }
})

export const filterColor = style({
  borderRadius: '50%',
  width: 12,
  height: 12,
  marginLeft: 4,
  marginRight: 12,
})

export const tasksFilter = style({
  padding: 8,
  display: 'flex',
  flexDirection: 'column',
  zIndex: 60,
  width: 260,
  height: '100vh',
  backgroundColor: color('backgroundSecondary'),
})
