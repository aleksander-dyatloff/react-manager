import { style } from "@vanilla-extract/css";
import { color } from "../styles/helpers";
import { theme } from "../styles/theme.css";

export const app = style({
  display: 'flex',
  color: color('fontColor'),
  backgroundColor: color('backgroundMain'),
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