const opacityKeyframes = {
   '50%': {
       opacity: 0
    }
};

export const blink = {
    animationName: [opacityKeyframes],
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'step-start',
};
