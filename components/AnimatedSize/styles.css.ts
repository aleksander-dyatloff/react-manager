import { style } from "@vanilla-extract/css";

export const wrapper = style({
  position: 'relative',
  transitionProperty: 'width, height',
  transitionDuration: '200ms',
})

export const content = style({
  position: 'absolute',
  transitionProperty: 'width, height',
  transitionDuration: '200ms',
})