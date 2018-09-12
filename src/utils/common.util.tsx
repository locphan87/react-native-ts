import { isNil } from 'ramda'

const insertIf = (condition: boolean, ...elements: any[]) =>
  condition ? elements : []

// pattern matching on a value
// use _ as a branch for the default case
const match = (value: any) => (cases: object) => {
  const hasKey = (key: string) => String(value) === key
  const matchingCase = Object.keys(cases).find(hasKey) || '_'
  const result = cases[matchingCase]

  if (isNil(result)) {
    throw new Error('Match error')
  }

  return result
}

export { insertIf, match }
