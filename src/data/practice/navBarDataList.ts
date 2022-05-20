/* eslint-disable @typescript-eslint/no-unsafe-return */
export const navBarDataList = {
  Redux: [
    {
      dir: "redux",
      linkName: "Redux",
    },
    {
      dir: "redux/count",
      linkName: "Count",
    },
    {
      dir: "redux/todo",
      linkName: "Todo",
    },
  ],
  Rendering: [
    {
      dir: "rendering",
      linkName: "Rendering",
    },
    {
      dir: "rendering/csr",
      linkName: "CSR",
    },
    {
      dir: "rendering/isr",
      linkName: "ISR",
    },
    {
      dir: "rendering/ssg",
      linkName: "SSG",
    },
    {
      dir: "rendering/ssr",
      linkName: "SSR",
    },
  ],
  ReactQuery: [
    {
      dir: "reactquery",
      linkName: "ReactQuery",
    },
    {
      dir: "reactquery/pagenation",
      linkName: "PageNation",
    },
    {
      dir: "reactquery/person",
      linkName: "Person",
    },
    {
      dir: "reactquery/person/33",
      linkName: "Person/33",
    },
    {
      dir: "reactquery/create",
      linkName: "CreatePerson",
    },
  ],
  React18: [
    {
      dir: "react18",
      linkName: "React18",
    },
    {
      dir: "react18/autobatch",
      linkName: "Auto-batch",
    },
    {
      dir: "react18/suspense",
      linkName: "Suspense",
    },
    {
      dir: "react18/nested_suspense",
      linkName: "Nested-Suspense",
    },
    {
      dir: "react18/concurrent",
      linkName: "startTransition",
    },
    {
      dir: "react18/concurrent",
      linkName: "DefferdValue",
    },
  ],
}

export type TNavBarList = typeof navBarDataList

export type TSampleEnum = keyof TNavBarList

export const ArrSamplePractice = Object.entries(navBarDataList)
  .flat()
  .filter((k, v) => {
    return v % 2 === 0
  })
