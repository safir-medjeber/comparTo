import {transition, trigger, stagger, style, animate, keyframes, query, animateChild, state, group} from "@angular/animations";

const fadeIn = keyframes([
  style({opacity: 1}),
  style({opacity: 1})
]);

const full = {
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  "z-index": 500,
};

export const animations = [
  trigger('animate', [
    transition('void => *', [
      group([
        query('@slideUp', [animateChild()]),
        query('@slideDown', [animateChild()])
      ]),
      query('@rows', stagger('100ms', [animateChild()]))
    ]),
  ]),
  trigger('animateEnd', [
    transition('void => *', [
      query('@rows', stagger('100ms', [animateChild()]))
    ]),
  ]),
  trigger('slideUp', [
    transition('void => *', [
      style({transform: 'translateY(380%)'}),
      animate('2000ms ease', fadeIn),
      animate('250ms 500ms',
        keyframes([
          style({transform: 'translateY(380%)'}),
          style({transform: 'translateY(0)'}),
        ])
      )
    ])
  ]),
  trigger('slideDown', [
    state('*', style({opacity: 0})),
    transition('void => *', [
      style({transform: 'translateY(200%)'}),
      animate('2000ms ease', fadeIn),
      animate('250ms 500ms',
        keyframes([
          style({opacity: 1, transform: 'translateY(200%)'}),
          style({opacity: 0, transform: 'translateY(400%)'}),
        ])
      )
    ]),
  ]),
  trigger('rows', [
    transition('void => *', [
      query('@buttonScale', stagger(100, [animateChild()]))
    ])
  ]),
  trigger('buttonScale', [
    transition('void => *', [
      style({opacity: 0, transform: 'scale(.3)'}),
      animate("250ms", style({opacity: 1, transform: 'scale(1)'}))
    ])
  ]),

  trigger("grow", [
    state("true", style(full)),
    transition("false => true", [
      style({"z-index": 500}),
      group([
        animate("250ms ease-out", style({  left: 0, width: "100%"})),
        animate("400ms ease", style({  top: 0, height: "100%"}))
      ])
    ])
  ])
]
