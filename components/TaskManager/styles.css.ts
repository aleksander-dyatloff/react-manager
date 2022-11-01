import { style, styleVariants } from "@vanilla-extract/css";

export const table = style({
  height: '100vh',
  userSelect: 'none',
});

export const tableHead = style({
  padding: '0 8px 0 40px',
  display: 'flex',
  alignItems: 'center',
  position: 'sticky',
  marginBottom: 16,
  height: 40,
  top: 0,
  left: 0,
  right: 0,
  transitionProperty: 'backgroundColor boxShadow',
  transitionDuration: '200ms',
  zIndex: 20,
})

export const openedTask = style({
  width: '70vw',
  height: '70vh',
  zIndex: 90,
})

export const tableHeadVariant = styleVariants({
  elevating: [tableHead, {
    backgroundColor: 'rgba(239, 239, 239, 0.7)',
    boxShadow: '0 0 6px 1px rgba(56, 56, 56, 0.3)',
    backdropFilter: 'blur(8px) saturate(180%)',
  }],
})

export const tableBody = style({
})

export const columnHead = style({
  padding: '0 8px',
  width: '180px',
  textAlign: 'center',
  position: 'relative',
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