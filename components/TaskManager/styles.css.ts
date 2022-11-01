import { style } from "@vanilla-extract/css";
import { color } from "../../styles/helpers";
import { theme } from "../../styles/theme.css";

export const table = style({
  WebkitOverflowScrolling: 'auto',
  userSelect: 'none',
  height: '100vh',
  overflowY: 'auto',
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
  backgroundColor: color('backgroundPrimary'),
})

export const tableColumnDivider = style({
  margin: '8px 0',
  width: 1,
  backgroundColor: color('backgroundPrimary'),
})