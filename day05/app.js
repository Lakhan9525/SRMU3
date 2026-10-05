const http = require("http");
const server = http.createServer((req,res)=>{
    res.end("hello ! welocme to backenddddddddddddddddddddddddddddd")
});
server.listen(3000);
console.log("Server running at http://localhost:3000");