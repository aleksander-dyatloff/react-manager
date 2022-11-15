import { style } from "@vanilla-extract/css";
import { color } from "../../styles/helpers";

export const table = style({
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
  marginLeft: 32,
  padding: '0 8px',
})

export const taskInModal = style({
  width: 'calc(100% - 80px)',
  height: 'calc(100% - 80px)',
  borderRadius: 20,
  display: 'flex',
  flexDirection: 'column',
})

export const taskModalContent = style({
  flex: '1 0',
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