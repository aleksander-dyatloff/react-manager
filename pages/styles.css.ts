import { style } from "@vanilla-extract/css";
import { color } from "../styles/helpers";

export const app = style({
  display: 'flex',
  color: color('fontColor'),
  backgroundColor: color('backgroundMain'),
})

export const user = style({
  userSelect: 'none',
  cursor: 'pointer',
  display: 'flex',
  fontSize: 14,
  alignItems: 'center',
  padding: '4px 8px',
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
  marginBottom: 8,
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

export const tasksFilter = style({
  padding: 8,
  display: 'flex',
  flexDirection: 'column',
  zIndex: 60,
  width: 307,
  height: '100vh',
  backgroundColor: color('backgroundSecondary'),
})

export const navBar = style({
  width: 50,
  height: '100vh',
  padding: 8,
  backgroundColor: color('backgroundSecondary'),
  borderRight: `1px solid ${color('backgroundMain')}`
})