// const person = require('./person');

// console.log(person);
//-------------------------------------------------------------------------
// const Person = require('./person');

// const person1 = new Person("Pawan Chandra Joshi", 22);

// person1.greeting();

//-------------------------------------------------------------------------
// const Logger = require("./logger");
// const logger = new Logger();

// logger.on("message", (data) => console.log('Called Listener:', data));

// logger.log("hello world");
// logger.log("Hii");
// logger.log("hello!!");

//-------------------------------------------------------------------------
const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   if (req.url === "/") {
  //     fs.readFile(
  //       path.join(__dirname, "public", "index.html"),
  //         (err, content) => {
  //             if (err) throw err;
  //         res.writeHead(200, { "Content-Type": "text/html" });
  //         res.end(content);
  //       }
  //     );
  //   }
  //     if (req.url === "/api/users") {
  //       const users = [
  //         { name: "Bob Smith", age: 30 },
  //         { name: "Harry Lee", agr: 29 },
  //       ];
  //         res.writeHead(200, { "Content-Type": "application/json" });
  //         res.end(JSON.stringify(users));
  //     }

  //BUILD FILE PATH
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  //EXTENSION OF THE FILE
  let extname = path.extname(filePath);

  //INITIAL CONTENT TYPE
  let contentType = "text/html";

  //CHECK EXT AND SET CONTENT TYPE
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
  }

  //READ FILE
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        //Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        //Some server error
        res.writeHead(500);
        res.end("Server Error: ${err.code}");
      }
    } else {
      //Success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
