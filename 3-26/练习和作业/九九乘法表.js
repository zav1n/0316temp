let str = ""
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= i; j++) {
    // console.log(`${j} * ${i} = ${i * j}`)
    str += `${i} * ${j} = ${i * j} `
  }
  str += "\n"
}
console.log(str)