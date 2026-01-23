import net from 'net'
const client = new net.Socket()

client.connect(3001,'127.0.0.1',()=>{
    console.log("Connected to Server");
    
    client.write("Hello Krishna")
})

client.on("data",(data)=>{
    console.log("Client Says:",data.toString());
})