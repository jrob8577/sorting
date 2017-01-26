const mergeSort = array => {
  if( array.length <= 1 ) {
    return array
  } else {
    const middle = Math.floor( array.length / 2 )

    return merge(
      mergeSort( array.slice( 0, middle )),
      mergeSort( array.slice( middle ))
    )
  }
}

const merge = ( firstArray, secondArray ) => {
  const result = []
  let firstIndex = 0
  let secondIndex = 0

  while( result.length < firstArray.length + secondArray.length ) {
    const firstValue = firstIndex < firstArray.length ? firstArray[ firstIndex ] : Infinity
    const secondValue = secondIndex < secondArray.length ? secondArray[ secondIndex ] : Infinity

    if( firstValue < secondValue ) {
      result.push( firstValue )
      firstIndex++
    } else {
      result.push( secondValue )
      secondIndex++
    }
  }

  return result
}


export default mergeSort
