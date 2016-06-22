export function trimmer(toRemove, str){
  return _.replace(str, toRemove, "")
}

export function snakeCase(str){
  return str.replace(/ /g,"_")
}

export function reverseSnakeCase(str){
  return str.replace(/_/g," ")
}