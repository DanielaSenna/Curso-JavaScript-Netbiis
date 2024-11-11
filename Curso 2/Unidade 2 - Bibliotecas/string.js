const stringExemplo = "Curso de JavaScript"

console.log(stringExemplo.length)
console.log(stringExemplo.indexOf("JavaScript"))
console.log(stringExemplo.lastIndexOf("JavaScript"))
console.log(stringExemplo.slice(0, 5))
console.log(stringExemplo.concat(" Completo"))


// charArt() e charCodeAt()
console.log(stringExemplo.charAt(0))
console.log(stringExemplo.charCodeAt(0))

// toLowerCase() e toUpperCase()
console.log(stringExemplo.toLowerCase())
console.log(stringExemplo.toUpperCase())

// startsWith(), endsWith() e includes()
console.log(stringExemplo.startsWith("Curso"))
console.log(stringExemplo.endsWith("Python"))
console.log(stringExemplo.includes("JavaScript"))

// subtring()
console.log(stringExemplo.substring(0, 5))

// replace() e replaceAll()
console.log(stringExemplo.replace("a", "o"))
console.log(stringExemplo.replaceAll("a", "o"))

// split()
console.log(stringExemplo.split(" "))

// trim()
console.log("  Curso de JavaScript   ".trim())

// repeat()
console.log(stringExemplo.repeat(5))

// padStart() e padEnd()
console.log(stringExemplo.padStart(25, "."))
console.log(stringExemplo.padEnd(25, "."))

// indexOf() e lastIndexOf()
console.log(stringExemplo.indexOf("a"))
console.log(stringExemplo.lastIndexOf("a"))