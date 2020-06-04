import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#ececec',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          'scrollbar-width': 'thin',
        },
        '*::-webkit-scrollbar': { width: 4, height: 4 },
      },
    },
  },
})
export default theme
