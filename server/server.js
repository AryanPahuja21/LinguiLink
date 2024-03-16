const io = require("socket.io")(3000, {
  cors: { origin: "http://localhost:3001", methods: ["GET", "POST"] },
});

const axios = require('axios')

io.on("connection", (socket) => {
  let roomName = ""; // Initialize roomName variable
  
  socket.on("message", async ({ message, targetLanguage }) => {
    const encodedParams = new URLSearchParams();
    encodedParams.set('source_language', 'auto');
    encodedParams.set('target_language', targetLanguage);
    encodedParams.set('text', message);
    const options = {
      method: 'POST',
      url: 'https://text-translator2.p.rapidapi.com/translate',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '1445dc4045msheb401f20a79c9f6p10b974jsnf0620393f3e7',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
      },
      data: encodedParams,
    };
    const response = await axios.request(options);
    console.log(response.data);
    const transMessage = response.data.data.translatedText; // Declare transMessage variable
    if (roomName.length > 0) {
      io.to(roomName).emit("message", "Original: " + message + " Translated: " + transMessage); // Emit message to room
    }
  });

  socket.on("join", (room) => {
    socket.join(room); // Join room
    roomName = room; // Set roomName variable
    console.log("User Joined Room: " + roomName);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected.")
  });
});
