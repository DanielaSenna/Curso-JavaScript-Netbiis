const jsonString = {"Nome": "John", "Age": "30", "City": "New York"}

const jsonObject = JSON.parse(jsonString)

console.log(jsonObject)
jsonObject.name = 'Jane'

const jsonString2 = JSON.stringify(jsonObject)
console.log(jsonString2)