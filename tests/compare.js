import bubbleSort from '../sorts/bubbleSort'
import mergeSort from '../sorts/mergeSort'
import generate from '../data/generate'

for( let size = 10; size <= 100000; size *= 10 ) {
  console.log( `********** DATASET SIZE ${size} **********`)
  const dataset = generate( size )

  const start = Date.now()
  console.log( 'Executing bubble sort...' )
  bubbleSort( dataset )

  const next = Date.now()
  console.log( 'Executing merge sort...' )
  mergeSort( dataset )

  const end = Date.now()

  console.log( `** Bubble Sort took ${(next - start) / 1000} seconds` )
  console.log( `** Merge Sort took ${(end - next) / 1000} seconds` )
}
