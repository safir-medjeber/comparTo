export type themes = 'country' | 'building' | 'food' | 'car' | 'stadium'
export const themes: themes[] = ['country', 'building', 'food', 'car', 'stadium'];

interface ThemeProps {
  label: string
  question: string
  withMiniature: boolean
}

export const themeMap: {[key in themes]: ThemeProps} = {
  'country': {label: 'country', question: 'Quel est le pays le plus peuplé?', withMiniature: true},
  'building': {label: 'sport', question: 'Quel est la construction', withMiniature: false},
  'food': {label: 'sport', question: 'Quel est la nourriture', withMiniature: false},
  'car': {label: 'sport', question: 'Quel est la voiture', withMiniature: false},
  'stadium': {label: 'sport', question: 'Quel est le stade', withMiniature: false},
}

