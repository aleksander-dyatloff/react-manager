interface ArrayFormattedToMap<T> {
  [K: string]: T
}

const objectArrayToMap = <T extends { id: string }>(array: T[]): ArrayFormattedToMap<T> => {
  let map: ArrayFormattedToMap<T> = {}

  for (const item of array) {
    map[item.id] = item
  }

  return map
}

export default objectArrayToMap