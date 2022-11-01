import { globalStyle } from "@vanilla-extract/css";

globalStyle('*', {
  boxSizing: 'border-box'
})

globalStyle('body', {
  minHeight: '100vh',
  width: '100vw',
  margin: 0,
  padding: 0,
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
})