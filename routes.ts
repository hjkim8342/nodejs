import * as http from "http";
import fs from "fs";

const requestHandler = (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  const { url, method } = req;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write(`<head><title>${"Enter Message"}</title></head>`);
    res.write(`
      <body>
        <form action="/message" method="POST">
          <input type="text" name="message" />
          <button type="submit">Send</button>
        </form>
      </body>
    `);
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body: Buffer[] = [];
    req.on("data", (chunk: Buffer) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile(
        "message.txt",
        message,
        (err: NodeJS.ErrnoException | null) => {
          if (err) {
            console.error("Error writing to file:", err);
            res.statusCode = 500;
            return res.end();
          } else {
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
          }
        }
      );
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  return res.end();
};

export default {
  handler: requestHandler,
  someText: "Some hardcord text",
};
