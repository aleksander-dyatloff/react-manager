import { style } from "@vanilla-extract/css";
import { color } from "../../styles/helpers";
import { theme } from "../../styles/theme.css";

export const wrapper = style({
  padding: '0 10px',
  backgroundColor: color('backgroundMain'),
  height: 26,
  borderRadius: 10,
  display: 'flex',
  justifyContent: 'stretch',
})

export const input = style({
  border: 'none',
  backgroundColor: 'transparent',
  padding: 0,
  margin: 0,
  width: 'auto',
  fontSize: 'inherit',
})