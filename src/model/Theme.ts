export type Theme = 'country' | 'building' | 'food' | 'car' | 'stadium'
export const themes: Theme[] = ['country', 'building', 'food', 'car', 'stadium'];

export interface ThemeProps {
  label: string
  question: string
  withMiniature: boolean
}

export const getTheme: {[key in Theme]: ThemeProps} = {
  'country': {label: 'Populations', question: 'Quel pays est le plus peuplé ?', withMiniature: true},
  'building': {label: 'Monuments', question: 'Quel édifice est le plus haut ?', withMiniature: false},
  'food': {label: 'Nourritures', question: 'Quelle denrée est la plus chère ?', withMiniature: false},
  'car': {label: 'Voitures', question: 'Quelle voiture est la plus rapide ?', withMiniature: false},
  'stadium': {label: 'Stades', question: 'Quel stade a la plus grande capacité ?', withMiniature: false},
}
