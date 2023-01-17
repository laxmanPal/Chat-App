const socket = io("http://localhost:8000", { transports: ["websocket"] });

const msgForm = document.getElementById("msg-send");
const msgInput = document.getElementById("msg-input");
// const msgContainer = document.getElementById("chat-history");
const ul = document.getElementById("ul");
// const li = document.getElementById("li");

const append = (message, position) => {
  // const newUl = document.createElement("ul").classList.add("m-b-0");
  // const createNewLi = document.createElement("li").classList.add("clearfix");
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageElement.classList.add("message");
  // messageElement.classList.add("my-message");
  messageElement.classList.add(position);
  // msgContainer.append(messageElement);
  ul.append(messageElement);
  // const newLi = createNewLi.append(messageElement);
  // ul.append(newLi);
};

const name = prompt("Enter Your Name To Join The C-Chat");

socket.emit("new-user-joined", name);

socket.on("user-joined", (name) => {
  append(`${name} joined the chat`, "center");
  // alert(`${name} joined the chat`);
  // console.log(`${name} joined the chat`)
});

socket.on("receive", (data) => {
  append(`${data.name} : ${data.message} `, "other-message");
  // alert(`${name} joined the chat`);
  // console.log(`${name} joined the chat`)
});

socket.on("left", (name) => {
  append(`${name} : left the chat`, "center");
  // alert(`${name} joined the chat`);
  // console.log(`${name} joined the chat`)
});

msgForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = msgInput.value;
  append(`${message}`, "my-message");
  socket.emit("send", message);
  msgInput.value = "";
});

document.getElementById("name").innerText = name;
