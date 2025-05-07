function outputNumbers(start: number, end: number, even: boolean): void {
  for (let i = start; i <= end; i++) {
    if ((i % 2 === 0 && even) || (i % 2 !== 0 && !even)) {
      console.info(i)
    }
  }
}

function sum(start: number, end: number, even: boolean): number {
  let sum = 0
  for (let i = start; i <= end; i++) {
    if ((i % 2 === 0 && even) || (i % 2 !== 0 && !even)) {
      sum += i
    }
  }
  return sum
}

const totalLoops = 10
let totalSum = 0
for (let i = 1; i <= totalLoops; i++) {
  const start = (i - 1) * 10 + 1
  const end = i * 10
  const even = i % 2 === 0
  console.info(`Perulangan 10 ke-${i}:`)
  outputNumbers(start, end, even)
  console.info('--------------------------')
  const loopSum = sum(start, end, even)
  console.info(`Jumlah: ${loopSum}\n`)
  totalSum += loopSum
}
