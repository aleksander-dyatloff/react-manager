import { globalStyle } from '@vanilla-extract/css'
import { color } from './helpers'

globalStyle(
  '*',
  { boxSizing: 'border-box' },
)

globalStyle(
  'body',
  {
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0,
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    backgroundColor: color('backgroundMain'),
  },
)
