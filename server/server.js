import config from "config";
import Express from "express";
import http from "http";
import * as bodyParser from "body-parser";
import cors from "cors";

const app = new Express();
const httpServer = http.createServer(app);

const defaultPort = config.get("server.port");

export default class ExpressServer {
  constructor() {
    app.set("appPath", `${global}client`);
    app.use(bodyParser.json());
    app.use(
      bodyParser.urlencoded({
        extended: true
      })
    );
    app.use(cors());
    app.disable("x-powered-by");

    app.use((error, req, res, next) => {
      if (
        error instanceof SyntaxError &&
        error.status === 400 &&
        "body" in error
      ) {
        console.error(error);
        return res.status(400).json({
          errorMessage: "Invalid JSON format in request body"
        }); // Bad request
      }
      next();
    });
  }

  router(routes) {
    routes(app);
    return this;
  }

  listen(port = defaultPort) {
    const httpPromise = new Promise(resolve => {
      httpServer
        .listen(port, () => {
          resolve();
        })
        .on("error", error => {
          console.error(`${error}`);
          process.exit(0);
        });
    });

    ["SIGINT", "SIGTERM"].forEach(signal =>
      process.on(signal, () => {
        console.log(`Shutting down server on port: ${port} (HTTP)`);
        process.exit(0);
      })
    );

    return Promise.all([httpPromise]).then(() => {
      const env = process.env.NODE_ENV || "development";
      const httpPort = `${port} (HTTP)`;
      console.log(`Up and running in ${env} on port: ${httpPort}`);
      return app;
    });
  }
}
