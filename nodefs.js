const { isUtf8 } = require('buffer');
const fs = require('fs')
const path = require('path')
const dirpath = path.join(__dirname , 'Node')
const filepath = `${dirpath}/banana.txt`;
// for(i=0 ; i<5 ;i++){
//     fs.unlinkSync(dirpath+"\hello"+i+".txt" , "a simple tut")
// }
// fs.readdir(dirpath , (err , files) => {
//     files.forEach((item) => {
//         console.log("not" , item)
//     })
// })
// fs.writeFileSync(filepath , "this is a file. ")
// fs.readFile(filepath , "utf8" , (err , item) =>{
//     console.log(item)
// })
// fs.appendFile(filepath , " use for fruits ." , (err , item) =>{
//     if(err) console.log("success")
// })
// fs.rename(filepath , `${dirpath}/fruit.txt`, (err) => {
//     if (!err) {
//         console.log("siccess")
//     }
// })
// fs.unlinkSync(`${dirpath}/fruit.txt`)
