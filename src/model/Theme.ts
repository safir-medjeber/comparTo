export type Theme = 'country' | 'building' | 'food' | 'car' | 'stadium'
export const themes: Theme[] = ['country', 'building', 'food', 'car', 'stadium'];

export interface ThemeProps {
  label: string
  question: string
  withMiniature: boolean,
  unit: Unit
}

export interface Unit {
  label: string
  format: string
}

const habitant = {label: 'habitants', format: '.'}
const meter = {label: 'mètres', format: '.'}
const euro = {label: '€', format: '.2'}
const km = {label: "km/h", format: '.'}
const place = {label: "places", format: '.'}

export const getTheme: {[key in Theme]: ThemeProps} = {
  'country': {label: 'Populations', question: 'Quel pays est le plus peuplé ?', withMiniature: true, unit: habitant},
  'building': {label: 'Monuments', question: 'Quel édifice est le plus haut ?', withMiniature: false, unit: meter},
  'food': {label: 'Nourritures', question: 'Quelle denrée est la plus chere ?', withMiniature: false, unit: euro},
  'car': {label: 'Voitures', question: 'Quelle voiture est la plus rapide ?', withMiniature: false, unit: km},
  'stadium': {label: 'Stades', question: 'Quel stade a la plus grande capacité ?', withMiniature: false, unit: place},
}
