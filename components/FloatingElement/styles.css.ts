import { style } from "@vanilla-extract/css";

export const wrapper = style({
})

export const content = style({
  transitionProperty: 'top, left, width, height',
  transitionDuration: '200ms',
  zIndex: 10,
})