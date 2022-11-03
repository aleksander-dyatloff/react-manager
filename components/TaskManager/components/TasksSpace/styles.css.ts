import { style, styleVariants } from "@vanilla-extract/css";
import { color } from "../../../../styles/helpers";

export const tableSpace = style({
  display: 'flex',
})

export const tableSpaceStickerWrapper = style({
  zIndex: 10,
  minHeight: 112,
  width: 24,
  margin: '8px',
})

export const tableSpaceStickerWrapperVariant = styleVariants({
  closed: [tableSpaceStickerWrapper, {
    marginLeft: 0,
    marginRight: 16,
  }]
})

export const closestTasks = style({
  position: 'relative',
})

export const spaceTitle = style({
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  textAlign: 'center',
  overflow: 'hidden',
})

export const tableSpaceSticker = style({
  position: 'absolute',
  padding: '10px 0',
  backgroundColor: color('backgroundPrimary'),
  borderRadius: 10,
  fontSize: 14,
  height: '100%',
  lineHeight: '24px',
  fontWeight: 500,
  textOrientation: 'mixed',
  writingMode: 'vertical-rl',
  transitionProperty: 'transform, box-shadow, margin-left, border-radius, background-color',
  transitionDuration: '200ms',
  cursor: 'pointer',
  zIndex: 19,

  ':hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 6px 1px rgba(56, 56, 56, 0.2)',
  }
})

export const tableSpaceStickerVariant = styleVariants({
  closed: [tableSpaceSticker, {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    boxShadow: '0 4px 6px 1px rgba(56, 56, 56, 0.2)',
    backgroundColor: color('backgroundSecondary'),
  }]
})

export const columnBody = style({
  padding: '8px',
  width: '180px', 
  display: 'flex',
  flexDirection: 'column',
})

export const tableTask = style({
  width: '100%',
  height: '110px',
  marginBottom: 8,

  ':last-of-type': {
    marginBottom: 0,
  },
})

export const tableColumnDivider = style({
  margin: '16px 0',
  width: 1,
  backgroundColor: color('backgroundPrimary'),
})

export const spaceTask = style({
  position: 'absolute',
  top: 0,
  bottom: 0,
  margin: 'auto 0',
  width: 164,
  height: 110,
})