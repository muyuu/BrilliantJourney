// @flow

export const debounce:Function = (delay: number, func: Function): any => {
    let timer;

    clearTimeout(timer);
    timer = setTimeout(() => {
        func();
    }, delay);
};
