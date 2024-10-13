const getDivisorsCount = (number) => {
    if (typeof number !== "number" || isNaN(number)) {
      return NaN
    }

    if (!Number.isInteger(number) || number <= 0) {
      alert("number должен быть целым числом и больше нуля!")
      return
    }
  
    let count = 0
  
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        count++
      }
    }
    return count
  }
  
  console.log(getDivisorsCount(4))
  console.log(getDivisorsCount(5))
  console.log(getDivisorsCount(12))
  console.log(getDivisorsCount(30))
  console.log(getDivisorsCount(-4))
  console.log(getDivisorsCount(4.5))
  