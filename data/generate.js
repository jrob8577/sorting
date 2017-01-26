const DEFAULT_SIZE = 10000

const generateDataset = (size=DEFAULT_SIZE) => {
  const array = []

  for( let i = 0; i < size; i++ ) {
    array.push( Math.floor( Math.random() * 1000 + 1 ))
  }

  return array
}

export default generateDataset
