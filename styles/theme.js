import { theme as chakraTheme, extendTheme } from '@chakra-ui/react';

const colors = {
  background: '#F9F9F9',
  offblack: '#0F1214',
  gray: '#666A73',
};

const fonts = {
  ...chakraTheme.fonts,
  body: `Montserrat,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `Montserrat,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
};

const theme = extendTheme({
  colors,
  fonts,
});

export default theme;
