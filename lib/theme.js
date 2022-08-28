import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#15202B')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#C62A88',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      'section-subtitle': {
        textDecoration: 'none',
        fontSize: 16,
        marginTop: 1,
        marginBottom: 1
      }
    }
  },
  Text: {
    variants: {
      'skill-description': {
        fontWeight: '500',
        opacity: 0.8
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', 'purple.300')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca',
  highGreen: '#03C4A1',
  darkPink: '#C62A88',
  regularPurple: { 50: '#590995' },
  lime: {
    50: '#f2ffde',
    100: '#defcb2',
    200: '#caf884',
    300: '#b5f554',
    400: '#a1f226',
    500: '#88d90d',
    600: '#69a905',
    700: '#4a7801',
    800: '#2b4800',
    900: '#0b1900'
  }
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors
})
export default theme
