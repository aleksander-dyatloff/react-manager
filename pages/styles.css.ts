import { style, styleVariants } from "@vanilla-extract/css";
import { color } from "../styles/helpers";

export const app = style({
  display: 'flex',
  color: color('fontColor'),
})

export const navBarWrapper = style({
  position: 'relative',
  width: 50,
  height: '100vh',
})

export const navBarDivider = style({
  height: 1,
  width: 28,
  backgroundColor: color('backgroundPrimary'),
})

export const navBar = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: 'inherit',
  height: 'inherit',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '8px 0',
  backgroundColor: color("backgroundMain"),
})

export const navBarAvatar = style({
  borderRadius: 10,
  marginBottom: 5,
})

export const navBarButton = style({
  width: 32,
  height: 32,
  padding: 6,
  borderRadius: 10,
  margin: '5px 0',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  color: 'inherit',

  ':hover': {
    backgroundColor: color('fontColor', 0.1),
  }
})

export const navBarButtonVariant = styleVariants({
  isActive: [navBarButton, {
    backgroundColor: color('colorPrimary', 0.1),
    color: color('colorPrimary'),
    pointerEvents: 'none',
  }],
})