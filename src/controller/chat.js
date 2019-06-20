//TODO

module.exports = {
    handleRequest: (request) => {
        console.log((new Date()),'Connection from origin', request.origin);

        ws.on('message', (msg) => {
            console.log(msg);
        });

        ws.on('close', (connection) => {
            console.log(connection);
        });
    }
}