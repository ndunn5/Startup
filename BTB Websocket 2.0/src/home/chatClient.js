// Adjust the WebSocket protocol to what is being used for HTTP
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

// Display that we have opened the WebSocket
socket.onopen = (event) => {
  appendMsg('system', 'websocket', 'connected');
};

// Display messages we receive from our friends
socket.onmessage = async (event) => {
  const text = await event.data.text();
  const chat = JSON.parse(text);
  // We assume the server sends both 'name' and 'msg'
  appendMsg('friend', chat.name, chat.msg);
};

// If the WebSocket is closed, then disable the interface
socket.onclose = (event) => {
  appendMsg('system', 'websocket', 'disconnected');
  document.querySelector('#name-controls').disabled = true;
  document.querySelector('#chat-controls').disabled = true;
};

// Send a message over the WebSocket
function sendMessage() {
  const msgEl = document.querySelector('#new-msg');
  const msg = msgEl.value;
  if (!!msg) {
    appendMsg('me', 'me', msg); // Display the message locally for the sender
    const name = document.querySelector('#my-name').value;
    
    // Send the message along with the username
    socket.send(JSON.stringify({
      name: name,  // Send the username
      msg: msg     // Send the message
    }));
    
    msgEl.value = '';  // Clear the input field after sending the message
  }
}

// Create one long list of messages
function appendMsg(cls, from, msg) {
  const chatText = document.querySelector('#chat-text');
  const chatEl = document.createElement('div');
  chatEl.innerHTML = `<span class="${cls}">${from}</span>: ${msg}</div>`;
  chatText.prepend(chatEl);  // Prepend so new messages show up at the top
}

// Send message on enter keystroke
const input = document.querySelector('#new-msg');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Disable chat if no name provided
const chatControls = document.querySelector('#chat-controls');
const myName = document.querySelector('#my-name');
myName.addEventListener('keyup', (e) => {
  chatControls.disabled = myName.value === '';
});
