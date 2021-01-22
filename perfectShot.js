const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

let position = [0, 0]

const finalPosition = function (moves) {
  for (let i of moves) {
    if (i === 'north') {
      position[1]++
    } else if (i === 'west') {
      position[0]--
    } else if (i === 'east') {
      position[0]++
    } else {
      position[1]--
    }
  }
  return position
}
console.log(finalPosition(moves));