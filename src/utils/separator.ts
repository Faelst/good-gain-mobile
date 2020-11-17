import { rsize } from './size'

export function separatorHorizontal(
  index: number, data: string[] | any, first: number, between: number, last: number
  ) {
  if (index === data.length - 1) {
    return {marginLeft: rsize(between), marginRight: rsize(last)}
  } else if (index >= 1) {
    return {marginLeft: rsize(between)}
  } else if (index === 0) {
    return {marginLeft: rsize(first)}
  }
}

export function separatorVertical(
  index: number, data: string[] | any, first: number, between: number, last: number
  ) {
  if (index === data.length - 1) {
    return {marginTop: rsize(between), marginBottom: rsize(last)}
  } else if (index >= 1) {
    return {marginTop: rsize(between)}
  } else if (index === 0) {
    return {marginTop: rsize(first)}
  }
}