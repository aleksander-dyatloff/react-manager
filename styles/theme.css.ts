import { createTheme, createThemeContract } from '@vanilla-extract/css'

export const theme = createThemeContract({
  color: {
    fontColor: null,
    colorPrimary: null,
    backgroundPrimary: null,
    backgroundSecondary: null,
    backgroundMain: null,
  },
})

export const lightTheme = createTheme(
  theme,
  {
    color: {
      fontColor: '59,59,59',
      colorPrimary: '33,150,243',
      backgroundPrimary: '239,239,239',
      backgroundSecondary: '244,244,244',
      backgroundMain: '255,255,255',
    },
  },
)

export const darkTheme = createTheme(
  theme,
  {
    color: {
      fontColor: '236,236,236',
      colorPrimary: '33,150,243',
      backgroundPrimary: '63,63,63',
      backgroundSecondary: '57,57,57',
      backgroundMain: '38,38,38',
    },
  },
)
