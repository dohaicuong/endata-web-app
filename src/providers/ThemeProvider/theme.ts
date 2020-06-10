import { createMuiTheme, ThemeOptions } from '@material-ui/core'
import Kuro from './Kuro.json'
import Sophia from './Sophia.json'

const defaultTheme =
  process.env.NODE_ENV === 'development' ? Kuro : (Sophia as any)

const defaultMuiTheme = createMuiTheme({ ...Sophia })

export default (options: ThemeOptions = {}) => {
  return createMuiTheme({
    ...defaultTheme,
    ...options,
    palette: {
      ...defaultTheme?.palette,
      ...options.palette,
      background: {
        ...options.palette?.background,
        default: '#ececec',
      },
    },
    overrides: {
      ...options.overrides,
      MuiCssBaseline: {
        ...options.overrides?.MuiCssBaseline,
        '@global': {
          '*': {
            'scrollbar-width': 'thin',
          },
          '*::-webkit-scrollbar': { width: 8, height: 4 },
          '::-webkit-scrollbar-thumb': {
            background: defaultMuiTheme.palette.secondary.main,
            borderRadius: 10,
          },
          '::-webkit-scrollbar-thumb:hover': {
            background: defaultMuiTheme.palette.secondary.dark,
          },
        },
      },
      MuiFormLabel: {
        root: {
          // color: 'rgba(0, 0, 0, 0.84) !important',
          fontWeight: '600 !important',
        },
      },
      MuiSwitch: {
        track: { backgroundColor: 'red' },
        switchBase: { color: 'red' },
      },
      MuiButton: {
        label: {
          textTransform: 'none',
        },
      },
      MuiTab: {
        root: {
          fontWeight: 700,
        },
        wrapper: {
          textTransform: 'none',
        },
      },
    },
  })
}
