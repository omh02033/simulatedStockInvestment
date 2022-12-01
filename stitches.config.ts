import { createStitches } from '@stitches/react';

export const MAIN_ACCENT = '#FCFCFC';
export const COLORS = {
  accent: MAIN_ACCENT,
  background: '#F9F9F9',
  actionableGray: '#333333',
  dark2: '#2c3939',
  dark3: '#808888',
  dark4: '#ABB0B0',
  dark5: '#D5D7D7',
  dark6: '#F4F5F5',
};

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: COLORS,
  },
});
