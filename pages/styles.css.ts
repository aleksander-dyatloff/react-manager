import { style } from "@vanilla-extract/css";
import { color } from "../styles/helpers";

export const app = style({
  display: 'flex',
  color: color('fontColor'),
  backgroundColor: color('backgroundMain'),
})

export const navBar = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '8px 0',
  width: 50,
  height: '100vh',
  backgroundColor: color("backgroundMain"),
})

export const navBarAvatar = style({
  borderRadius: 10,
  marginBottom: 10,
})

export const navBarButton = style({
  width: 32,
  height: 32,
  padding: 6,
  borderRadius: 10,
  marginBottom: 10,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  color: 'inherit',

  ':hover': {
    backgroundColor: color('backgroundPrimary')
  }
})