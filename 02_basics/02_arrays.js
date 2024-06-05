const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
// console.log(marvel_heros.push(dc_heros))
// marvel_heros.push(dc_heros)  //array within array
// console.log(marvel_heros);
// console.log(marvel_heros[3])
// console.log(marvel_heros[3][1])
// const allheros=marvel_heros.concat(dc_heros)
const allheros=[...marvel_heros,...dc_heros]
console.log(allheros);
const another_array=[1,2,3,[4,5],6,7,[8,[9,10]]]
const real_array=another_array.flat(Infinity)
console.log(real_array)
console.log(Array.isArray("lovely"))