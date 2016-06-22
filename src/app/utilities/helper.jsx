export function trimmer(toRemove, str){
  return _.replace(str, toRemove, "")
}

export function snakeCase(str){
  return str.replace(/ /g,"_")
}