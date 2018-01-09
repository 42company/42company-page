import Typography from 'typography'
import {
  TABLET_MEDIA_QUERY,
  MOBILE_MEDIA_QUERY,
} from 'typography-breakpoint-constants'

const options = {
  title: '42gateway',
  baseFontSize: '20px',
  baseLineHeight: 1.5,
  headerLineHeight: 1.5,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '300',
        '500',
        '700',
      ],
    },
  ],
  headerFontFamily: [
    'Montserrat'
  ],
  bodyFontFamily: [
    'Montserrat'
  ],
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    h1: { fontSize: '45px', fontWeight: '300' },
    h2: { fontSize: '30px', fontWeight: '700' },
    h3: { fontSize: '22px', fontWeight: '500' },
    h4: { fontSize: '18px', fontWeight: '300' },
    h5: { fontSize: '15px', fontWeight: '300', color: '#999999'},
    p: { fontSize: '20px', fontWeight: '300' },
    [TABLET_MEDIA_QUERY]: {
      h1: { fontSize: '42px', fontWeight: '300' },
      h2: { fontSize: '28px', fontWeight: '700' },
      h3: { fontSize: '21px', fontWeight: '500' },
      h4: { fontSize: '17px', fontWeight: '300' },
      h5: { fontSize: '14px', fontWeight: '300', color: '#999999'},
      p: { fontSize: '19px', fontWeight: '300' },
    },
    [MOBILE_MEDIA_QUERY]: {
      h1: { fontSize: '39px', fontWeight: '300' },
      h2: { fontSize: '26px', fontWeight: '700' },
      h3: { fontSize: '20px', fontWeight: '500' },
      h4: { fontSize: '16px', fontWeight: '300' },
      h5: { fontSize: '13px', fontWeight: '300', color: '#999999'},
      p: { fontSize: '18px', fontWeight: '300' },
    },
  }),
}

const typography = new Typography(options)

typography.injectStyles()

module.exports = typography
