import asyncio
import websockets

# Maintain a list of connected clients
connected_clients = set()


async def echo(websocket, path):
    # Add the current client to the set of connected clients
    connected_clients.add(websocket)

    try:
        async for message in websocket:
            # Broadcast the received message to all connected clients
            for client in connected_clients:
                await client.send(message)
    except websockets.exceptions.ConnectionClosedOK:
        pass
    finally:
        # Remove the client from the set of connected clients
        connected_clients.remove(websocket)

start_server = websockets.serve(echo, "0.0.0.0", 8765)

loop = asyncio.get_event_loop()
loop.run_until_complete(start_server)
loop.run_forever()
