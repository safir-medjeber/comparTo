export type Theme = 'country' | 'building' | 'food' | 'car' | 'stadium'
export const themes: Theme[] = ['country', 'building', 'food', 'car', 'stadium'];

export interface ThemeProps {
  label: string
  question: string
  withMiniature: boolean
}

export const getTheme: {[key in Theme]: ThemeProps} = {
  'country': {label: 'country', question: 'Quel est le pays le plus peuplé?', withMiniature: true},
  'building': {label: 'sport', question: 'Quel est la construction', withMiniature: false},
  'food': {label: 'sport', question: 'Quel est la nourriture', withMiniature: false},
  'car': {label: 'sport', question: 'Quel est la voiture', withMiniature: false},
  'stadium': {label: 'sport', question: 'Quel est le stade', withMiniature: false},
}

