import { style } from "@vanilla-extract/css";

export const table = style({
  height: '100vh',
  userSelect: 'none',
});

export const openedTask = style({
  width: '70vw',
  height: '70vh',
  zIndex: 90,
})

export const tableBody = style({
})

export const tableSpaceDividersWrapper = style({
  display: 'flex',
  marginBottom: 8,
  marginLeft: 32,
  padding: '0 8px',
})

export const tableSpaceDivider = style({
  height: 1,
  flex: '1 1',
  margin: '0 16px',
  backgroundColor: '#efefef',
})

export const tableColumnDivider = style({
  margin: '8px 0',
  width: 1,
  backgroundColor: '#efefef',
})