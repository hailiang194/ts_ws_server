import * as WebSocket from 'ws';

const PORT = 8080;

const wss = new WebSocket.Server({ port: PORT });

console.log(`WebSocket server listening on port ${PORT}`);

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message: string) => {
    console.log(`Received message: ${message}`);

    // Echo the message back to the client
    ws.send(`Echo: ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});