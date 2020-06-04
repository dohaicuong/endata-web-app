import createTheme from './theme'

export type ThemeName = 'Sophia' | 'Jade'
export default async (name: ThemeName) => {
  const selectedTheme = await import(`./${name}.json`).then(res => res.default)
  // fallback to use Sophia
  const theme = selectedTheme
    ? selectedTheme
    : await import('./Sophia.json').then(res => res.default)

  return createTheme(theme)
}
