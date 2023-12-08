export const debounce = (func: Function, delay: number = 0) => {
    let timeout: NodeJS.Timeout | null = null;

    return function (...args: []) {
        const context = this;
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
};
