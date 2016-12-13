const bel = require('bel')

module.exports = PieChart

function PieChart (state) {
  const sectors = calculateSectors(state.data)
  return bel`
    <svg viewBox="0, 0, 2, 2">
      ${sectors.map(PieSector)}
    </svg>
  `
}

function PieSector (state) {
  const {
    arc,
    x,
    y,
    rotation,
    color
  } = state

  const drawString = `M1,1 L2,1 A1,1 0, ${arc},1 ${x},${y} z`
  const rotateString = `rotate(${radToDeg(rotation)}, 1, 1)`

  return bel`
    <path fill="${color}" d="${drawString}" transform="${rotateString}">
    </path>`
}

function radToDeg (rad) {
  return rad / Math.PI * 180
}

function calculateSectors (data) {
  return data.reduce(function (sectors, datum) {
    const prev = sectors[sectors.length - 1]

    const angle = 2 * Math.PI * datum.percentage
    const x = Math.cos(angle) + 1
    const y = Math.sin(angle) + 1
    const arc = Math.floor(angle / Math.PI)

    const rotation = prev ? prev.rotation - angle : angle

    return sectors.concat({
      color: datum.color,
      rotation,
      arc,
      x,
      y
    })
  }, [])
}
