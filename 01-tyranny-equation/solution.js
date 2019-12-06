// --- Day 1: The Tyranny of the Rocket Equation ---
const { readFileAndSplitNewline } = require('../utils/data-files')

// take its mass, divide by three, round down, and subtract 2
function calculateFuelByMass(mass) {
  const roundedValue = Math.floor(parseInt(mass) / 3)
  return roundedValue >= 1 ? roundedValue - 2 : 0
}

// tests
console.log(calculateFuelByMass(12) === 2)
console.log(calculateFuelByMass(14) === 2)
console.log(calculateFuelByMass(1969) === 654)
console.log(calculateFuelByMass(100756) === 33583)

const moduleMassData = readFileAndSplitNewline('./andyData.txt')
const totalFuel = moduleMassData.reduce((total, moduleMass) => total + calculateFuelByMass(moduleMass), 0)

console.log(totalFuel)


