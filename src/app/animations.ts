
import { style, trigger, transition, animate, query, animateChild } from '@angular/animations';

export const routerAnimations =
trigger('routerAnimations', [
    transition('* => *', [
        query(
            ':enter',
            [
                style({opacity: 0, transform: 'translateX(100vw)'}),
            ],
            { optional: true }
            ),
        query(
            ':leave',
            [
                animate('0.55s ease-in-out', style({transform: 'translateX(-100vw)'})),
                animate('0.15s ease-in-out', style({opacity: 0})),
            ],
            { optional: true }
            ),
        query(
            ':enter',
            [
                animate('0.05s ease-in-out', style({transform: 'translateX(100vw)', opacity: 1})),
                animate('1.55s ease-in-out', style({transform: 'translateX(0vw)'}))
            ],
            { optional: true }
            )
    ])
]);

export const inOutAnimations = 
trigger(
  'inOutAnimations', 
  [
    transition('* => *', [
        query(
            ':enter',
            [
                style({opacity: 0, transform: 'scaleY(0)', fontSize: '0px'}),
            ],
            { optional: true }
            ),
        query(
            ':leave',
            [
                animate('0.55s ease-in-out', style({opacity: 0, transform: 'scaleY(0)', fontSize: '0px'})),
            ],
            { optional: true }
            ),
        query(
            ':enter',
            [
              animate('0.55s ease-in-out', style({opacity: 1, transform: 'scaleY(1)', fontSize: 'initial'})),
            ],
            { optional: true }
            )
    ])
  ]
);