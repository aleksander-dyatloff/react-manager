import { style, styleVariants } from "@vanilla-extract/css";

export const modalWrapper = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
  zIndex: 40,
})

export const modalBackdrop = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0,
  transitionProperty: 'opacity',
  transitionDuration: '300ms',
  pointerEvents: 'none',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
})

export const modalBackdropVariant = styleVariants({
  isOpen: [modalBackdrop, {
    opacity: 1,
    pointerEvents: 'visible',
  }]
})