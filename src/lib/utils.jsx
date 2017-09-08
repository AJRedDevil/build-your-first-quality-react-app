export const partial = (fn, ...args) => fn.bind(null, ...args) // argument into array and then later spread array.

const _pipe = (f, g) => (...args) => g(f(...args));

export const pipe = (...fns) => fns.reduce(_pipe); // without args in reduce it will take first two arguments and pass it on to the function