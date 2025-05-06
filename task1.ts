let current = 1
let looping = 1
while (current <= 100) {
  console.info(`Perulangan 10 ke-${looping}:`)
  let count = 0
  let sum = 0
  while (count < 5 && current <= 100) {
    if (looping % 2 !== 0) {
      if (current % 2 !== 0) {
        console.info(current)
        sum += current
        count++
      }
    } else {
      if (current % 2 === 0) {
        console.info(current)
        sum += current
        count++
      }
    }
    current++
  }
  console.info('--------------------------')
  console.info(`Jumlah: ${sum}`)
  looping++
}
