const cors = require("cors");

corsOptions = {
  origin: "*",
};

const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: corsOptions,
});

io.on("connection", (socket) => {
  console.log("user connected: ", socket.id);
  socket.emit("message", "서버 접속 성공");

  socket.on("message", (data) => {
    console.log(data);
    socket.emit("message", "echo: " + data);
  });

  socket.on("disconnect", function () {
    console.log("user disconnected: " + socket.name);
  });
});

server.listen(3000, function () {
  console.log("Socket IO server listening on port 3000");
});
