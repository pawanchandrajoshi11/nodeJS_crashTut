const fs = require("fs");
const path = require("path");

//create folder

// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created...");
// });

//create and write to file
//if we use it again it will overwrite everything that was already present in the file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World!",
//   (err) => {
//     if (err) throw err;
//     console.log("File written to...");
//   }
// );

//hence if we want to append it, we'll have to use this function
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World!",
//     (err) => {
//         if (err) throw err;
//         console.log("File written to...");
      
//         //append file
//         //this is synchronous so have to write inside this function
//         fs.appendFile(path.join(__dirname, "/test", "hello.txt"), "I love NODE.js", (err) => {
//             if (err) throw err;
//             console.log("File written to...");
//         });
//     }
// );

//read file
// fs.readFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

//rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloWorld.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed...");
  }
);
