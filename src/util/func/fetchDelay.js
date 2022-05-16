/* eslint-disable @typescript-eslint/no-unsafe-argument */
export const delay = (time) => (result) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(result), time)
  })
