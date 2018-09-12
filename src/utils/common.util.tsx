import { Linking } from 'expo'
import { compose, isNil, join, reduce, reject } from 'ramda'

import Constants from '../constants'

interface IAddress {
  unitNum: string
  addressName: string
  addressLine1: string
  addressLine2: string
  city: string
  postalCode: string
  country: string
}

const insertIf = (condition: boolean, ...elements: any[]) =>
  condition ? elements : []

// used it to simulate
// loading and updating state
const delay = (ms = 1000) =>
  new Promise(resolve => {
    setTimeout(resolve, ms)
  })

// pattern matching on a value
// use _ as a branch for the default case
const match = (value: any) => (cases: object) => {
  const hasKey = (key: string) => String(value) === key
  const matchingCase = Object.keys(cases).find(hasKey) || '_'
  const result: any = cases[matchingCase]

  if (isNil(result)) {
    throw new Error('Match error')
  }

  return result
}
const combineAddress = (
  address: IAddress,
  orderedFields = [
    'unitNum',
    'addressName',
    'addressLine1',
    'addressLine2',
    'city',
    'postalCode',
    'country'
  ]
) => {
  if (isNil(address)) {
    return
  }

  return compose(
    join(', '),
    reject(isNil),
    reduce((acc, key) => acc.concat(address[key]), [])
  )(orderedFields)
}
const callSupport = () => {
  Linking.openURL(`tel:${Constants.CALL_CENTER}`)
}
const callPhoneNumber = (phoneNumber: string) => () => {
  Linking.openURL(`tel:${phoneNumber}`)
}

const getLongNameByType = (data, types: string[]) => {
  const foundComponent = data.address_components.find(component => {
    return component.types.find(type => types.includes(type)) != null
  })
  if (foundComponent) {
    return foundComponent.long_name
  }

  return data.formatted_address
}

export {
  insertIf,
  delay,
  match,
  combineAddress,
  callSupport,
  callPhoneNumber,
  getLongNameByType
}
