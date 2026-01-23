import net from 'net'
const server = net.createServer((socket)=>{
console.log("Client connected");
console.log("ClientIP:",socket.remoteAddress);
console.log("ClientIP:",socket.remotePort);

socket.on("data",(data)=>{
    console.log("Client Says:",data.toString());
  
socket.write("Hello Client Message Received")
})
})


server.listen(3001,()=>{
    console.log("Server is running");
    
})

