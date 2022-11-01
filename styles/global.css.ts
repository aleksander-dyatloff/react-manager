import { globalStyle } from "@vanilla-extract/css";

globalStyle('*', {
  boxSizing: 'border-box'
})

globalStyle('body', {
  height: '100vh',
  overflow: 'hidden',
  width: '100vw',
  margin: 0,
  padding: 0,
  fontFamily: "-apple-system, Arial, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
})