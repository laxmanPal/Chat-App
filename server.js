// const express = require("express");

// const app = express();
// const path = require("path")
// const http = require("http").Server(app)

// const port = process.env.PORT || 8000;

// const io = require("socket.io")(http);
const io = require("socket.io")(8000);

// app.use(express.static(path.join(__dirname, 'public')));

// app.get("/" , (req , res )=>{
//     res.sendFile(path.join(__dirname, "chat_app.html"))
// })


const users = {};

io.on("connection", (socket) => {
  socket.on("new-user-joined", (name) => {
    console.log("New User" , name)
    users[socket.id] = name;
    socket.broadcast.emit("user-joined", name);
  });
  socket.on("send", message =>{
    socket.broadcast.emit("receive" , {message:message , name: users[socket.id]})
  });
  socket.on("disconnect", message =>{
    socket.broadcast.emit("left" , users[socket.id]);
    delete users[socket.id]
  });
});


// app.listen(port , (req , res)=>{
//     console.log(`Server Running ${port}`)
// })