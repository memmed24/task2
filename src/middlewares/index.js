let counter = 0;
export const counterMiddleware = store => next => action => {
    counter++;
    console.log("action called: ", counter);
    next(action);
};

export const duplicateActionsMiddleware = store => next => action => {
    next(action);
    next(action);
};

export const avoidOddActionMiddleware = store => next => action => {
    if (counter % 2 !== 0) {
        next(action);
    }
};
