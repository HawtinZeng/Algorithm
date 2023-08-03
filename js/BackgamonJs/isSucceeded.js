function isSucceed(position, m, n, locations) {
  const directions = [
    // diagonal directions
    [
      [-1, -1],
      [1, 1]
    ],
    [
      [-1, 1],
      [1, -1]
    ]
    // vertical directions
    [
      [0, 1],
      [0, -1]
    ],
    // horizontal directions
    [
      [-1, 0],
      [1, 0]
    ]
  ]
  let consecutivePieces = 1
  for(let i = 0; i < 4; i++) {
    const [direction1, direction2] = directions[i]
    for (let i1 = 1; i1 < 5; i1++) {
      // i1 = 1, 2, 3, 4
      const testPosiX = i1*direction1[0] + position[0]
      const testPosiY = i1*direction1[1] + position[1]
      if (locations[testPosiX][testPosiY])
        consecutivePieces++
      else
        break
    }
    for (let i1 = 1; i1 < 5; i1++) {
      // i1 = 1, 2, 3, 4
      const testPosiX = i1*direction2[0] + position[0]
      const testPosiY = i1*direction2[1] + position[1]
      if (locations[testPosiX][testPosiY])
        consecutivePieces++
      else
        break
    }
  }
  if (consecutivePieces >= 5)
    return true
  else
    return false
}