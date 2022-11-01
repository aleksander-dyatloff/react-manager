import { style } from "@vanilla-extract/css";

export const wrapper = style({
  padding: '0 10px',
  backgroundColor: 'white',
  height: 26,
  borderRadius: 10,
  display: 'flex',
  justifyContent: 'stretch',
})

export const input = style({
  border: 'none',
  backgroundColor: 'transparent',
  padding: 0,
  margin: 0,
  width: 'auto',
  fontSize: 'inherit',
})