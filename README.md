# Chat-App

C-Chat Is a Real Time Chat Application built using Node.js, Express, Socket.io.

## Features

- Real-time communication between a client and a server using Socket.io.
- Live previews
- Fullscreen mode
- Cross platform

## Installation

Make sure you have Node.js and npm install.

1. Clone or Download the repository

```bash
  git clone https://github.com/laxmanPal/Chat-App.git
  cd Chat-App
```

2. Install Dependencies

```bash
npm install
```

3. Start the Application

```bash
npm start
```

Now server is running ...

4. Now Open chat_app.html in two different tab in your favourite browser

- Enter Your Name In The Prompt And You Are ready to chat

## Sockets

- Having an active connection opened between the client and the server so client can send and receive data. This allows real-time communication using TCP sockets. This is made possible by Socket.io.

- The client starts by connecting to the server through a socket(maybe also assigned to a specific namespace). Once connections is successful, client and server can emit and listen to events.
