const { URLSearchParams } = require("url");

function requestHandler(req, res) {

  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.write(`
      <html>
        <head>
          <title>Form</title>
        </head>
        <body>
          <h2>Contact Form</h2>
          <form action="/submit" method="POST">
            <input type="text" name="name" placeholder="Enter name" required />
            <br/>
            <textarea name="message" placeholder="Enter message" required></textarea>
            <br/>
            <button type="submit">Submit</button>
          </form>
        </body>
      </html>
    `);

    return res.end(); 
  }

  //error
  if (req.method === "POSTT" && req.url === "/submit") {

    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString(); 
    });

    req.on("end", () => {

      const parsedData = new URLSearchParams(body);

      const name = parsedData.get("name");
      const message = parsedData.get("message");

      console.log("Name:", name);
      console.log("Message:", message);

      res.writeHead(302, { Location: "/" });
      res.end();
    });

    return;
  }

  res.writeHead(404);
  res.end("Page not found");
}

module.exports = requestHandler;