import { color } from '@styles/helpers'
import { style } from '@vanilla-extract/css'

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  borderRadius: 10,
  padding: '0 10px',
  minHeight: 32,
  color: color('colorPrimary'),
  userSelect: 'none',
})
