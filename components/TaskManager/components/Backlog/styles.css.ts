import { style, styleVariants } from "@vanilla-extract/css"

export const backdropButtonWrapper = style({
  position: 'fixed',
  bottom: 0,
  left: 300,
  right: 0,
  zIndex: 19,
})

export const backdropButtonIcon = style({
  width: 30,
  height: 30,
})

export const backdropButton = style({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'hidden',
  bottom: -40,
  left: 'calc(50% - 40px)',
  right: 'calc(50% - 40px)',
  color: '#b6b6b6',
  height: 80,
  margin: '0 auto',
  backdropFilter: 'blur(8px) saturate(180%)',
  backgroundColor: 'rgba(239, 239, 239, 0.7)',
  boxShadow: '0 2px 6px 1px rgba(56, 56, 56, 0.3)',
  borderRadius: '50%',
  padding: '6px 25px 0',
  cursor: 'pointer',
  transitionProperty: 'width, height, left, right, bottom, border-radius',
  transitionDuration: '300ms',
})

export const backlogTaskList = style({
  display: 'flex',
})

export const backlogDropZone = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
})

export const backlogTask = style({
  position: 'absolute',
  bottom: 0,
  transform: 'scale(0)',
  transformOrigin: 'bottom center',
  margin: '0 auto',
  width: 160,
  height: 110,
  zIndex: 30,
})

export const backlogTaskItem = style({
  transform: 'scale(1)',
  transformOrigin: 'top center',
  margin: '0 6px',
  width: 160,
  height: 110,
  zIndex: 30,
})


export const backdropButtonVariant = styleVariants({
  open: [backdropButton, {
    height: 450,
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    bottom: -300,
    left: -50,
    right: -50,
  }]
})
