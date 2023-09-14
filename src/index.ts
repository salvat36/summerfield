import http, { IncomingMessage, ServerResponse } from "http";

export const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        data: "It Works!",
      })
    );
  }
);

server.listen(3000, () => {
  console.log("Server is listening on localhost");
});
