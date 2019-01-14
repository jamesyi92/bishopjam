import Typography from 'typography'
import { MOBILE_MEDIA_QUERY } from './typographyBreakpoints'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.625,
  googleFonts: [
    {
      name: 'Hind',
      styles: ['400', '500', '600', '700'],
    },
    {
      name: 'Open Sans',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
  headerFontFamily: ['Hind', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'serif'],
  bodyWeight: 400,
  boldWeight: 700,
  headerWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
  	h1: {
  		fontSize: '72px'
  	},
  	h2: {
  		fontSize: '48px'
  	},
  	h3: {
			fontSize: '36px'
		},
  	[MOBILE_MEDIA_QUERY]: {
  		h1: {
  			fontSize: '48px'
  		}
  	}
  })
  // See below for the full list of options.
})

// Output CSS as string.
typography.toString()

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles()

export default typography;