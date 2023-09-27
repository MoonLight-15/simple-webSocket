let socket;

async function connectHandler() {
  const hostUrl = document.getElementById("hostUrl").value;
  socket = io("ws://" + hostUrl);

  socket.on("message", (msg) => {
    const textArea = document.getElementById("text-area");

    textArea.value += msg + "\n";
  });
}

async function sendMessageHandler() {
  socket.emit("message", document.getElementById("message").value);
}
