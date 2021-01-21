const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

/*function chooseStations(stations) {
  let ans = []
  for (let x of stations) {
    let y = x[1]
    //console.log(y);
    if (y >= 20) {
      //console.log(x[0]);

      let z = x[2]
      if (z === 'school' || z === 'community centre') {
        ans.push(x[0])
        
      }
    } 

  }
  return ans
}


console.log(chooseStations(stations)); */

const chooseStations = function (stations) {
  let ans = []
  for (let x of stations) {
    let y = x[1]
    //console.log(y);
    if (y >= 20) {
      //console.log(x[0]);

      let z = x[2]
      if (z === 'school' || z === 'community centre') {
        ans.push(x[0])
        
      }
    } 

  }
  return ans
}


console.log(chooseStations(stations)); 