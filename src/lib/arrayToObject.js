export default function arrayToObject(array) {
  return Object.keys(array).map(key => ({ key, value: array[key] }))
}
