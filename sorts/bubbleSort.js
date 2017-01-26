const bubbleSort = array => {

  for( let iteration = 0; iteration < array.length; iteration++ ) {

    for( let index = 1; index < array.length; index++ ) {
      if( array[ index - 1 ] > array[ index ] ) {
        const temp = array[ index ]
        array[ index ] = array[ index - 1 ]
        array[ index - 1 ] = temp
      }
    }
  }

  return array
}

export default bubbleSort
