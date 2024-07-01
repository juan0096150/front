import server from "./server";
server.listen(server.get("puerto"),()=>{
    console.log(`ejecutandose en el puerto: http://localhost:${server.get("puerto")}`);
})