// bring is the fs filesystem library
const fs = require('fs')




// Give you a way to read the text on a file and bring it into our program
// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) {console.log(err)}
//   console.log(data)
// })


// allows us to chande the entirety of the txt on a specified file or bring bran new files into existence
// fs.writeFile('something.txt', 'Hi', (err) => {
//   if (err) { console.log(err) }
//   console.log('File Created')
// })



// allow us to place more text onto a file
// fs.appendFile('example.txt', ' Goodbye World!', (err) => {
//   if (err) { console.log(err) }
//   console.log('File Updated!')
// })




let movies = [process.argv[2], process.argv[3], process.argv[4]]

for (i = 0; i < movies.length; i++) {

  fs.appendFile('movie.txt', movies[i] + ' ', (err) => {
    if (err) { console.log(err) }
  })
}

console.log('File Updated!')