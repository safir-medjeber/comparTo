export type Theme = 'country' | 'building' | 'food' | 'car' | 'stadium'
export const themes: Theme[] = ['country', 'building', 'food', 'car', 'stadium'];

export interface ThemeProps {
  label: string
  question: string
  withMiniature: boolean
}

export const getTheme: {[key in Theme]: ThemeProps} = {
  'country': {label: 'Pays', question: 'Quel est le pays le plus peuplé ?', withMiniature: true},
  'building': {label: 'Monuments', question: 'Quel est l\'édifice le plus haut ?', withMiniature: false},
  'food': {label: 'Nourritures', question: 'Quelle esl la denrée la plus chere ?', withMiniature: false},
  'car': {label: 'Voitures', question: 'Quelle est la voiture la plus rapide ?', withMiniature: false},
  'stadium': {label: 'Stades', question: 'Quel stade a la plus grande capacité ?', withMiniature: false},
}
