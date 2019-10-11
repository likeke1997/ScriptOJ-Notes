const safeGet = (data, path) => {
  try {
    return eval(`data.${path}`)
  } catch (e) {
    return undefined
  }
}