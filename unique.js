
const unique = (arr) => {
  return new Set([...arr])
}


const unique2 = (arr) => {
  const obj = {}
  return arr.filter(item => {
    return typeof item === 'object' && JSON.stringify(item) !== 'null' ?
      ( obj.hasOwnProperty(Object.keys(item).sort().map(ele => `${ele}${item[ele]}`).join(''))?
          false :
          obj[Object.keys(item).sort().map(ele =>`${ele}${item[ele]}`).join('')] = true
      ):
      (
        obj.hasOwnProperty(typeof item + item) ?
        false: 
        obj[typeof item + item] = true
      )
  })
}

module.exports = {
  unique,
  unique2
}