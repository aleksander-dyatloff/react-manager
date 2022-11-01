import { style } from "@vanilla-extract/css";

export const app = style({
  display: 'flex',
  justifyContent: 'flex-end',
})

export const tasksFilter = style({
  padding: 8,
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  zIndex: 60,
  width: 307,
  left: 0,
  top: 0,
  bottom: 0,
  backgroundColor: 'rgb(244,244,244)',
  height: '100vh',
  flex: '1 1',
})