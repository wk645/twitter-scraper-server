"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("config"));

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

var bodyParser = _interopRequireWildcard(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _express.default();

const httpServer = _http.default.createServer(app);

const defaultPort = _config.default.get("server.port");

class ExpressServer {
  constructor() {
    app.set("appPath", `${global}client`);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use((0, _cors.default)());
    app.disable("x-powered-by");
    app.use((error, req, res, next) => {
      if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
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
      httpServer.listen(port, () => {
        resolve();
      }).on("error", error => {
        console.error(`${error}`);
        process.exit(0);
      });
    });
    ["SIGINT", "SIGTERM"].forEach(signal => process.on(signal, () => {
      console.log(`Shutting down server on port: ${port} (HTTP)`);
      process.exit(0);
    }));
    return Promise.all([httpPromise]).then(() => {
      const env = process.env.NODE_ENV || "development";
      const httpPort = `${port} (HTTP)`;
      console.log(`Up and running in ${env} on port: ${httpPort}`);
      return app;
    });
  }

}

exports.default = ExpressServer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci9zZXJ2ZXIuanMiXSwibmFtZXMiOlsiYXBwIiwiRXhwcmVzcyIsImh0dHBTZXJ2ZXIiLCJodHRwIiwiY3JlYXRlU2VydmVyIiwiZGVmYXVsdFBvcnQiLCJjb25maWciLCJnZXQiLCJFeHByZXNzU2VydmVyIiwiY29uc3RydWN0b3IiLCJzZXQiLCJnbG9iYWwiLCJ1c2UiLCJib2R5UGFyc2VyIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImRpc2FibGUiLCJlcnJvciIsInJlcSIsInJlcyIsIm5leHQiLCJTeW50YXhFcnJvciIsInN0YXR1cyIsImNvbnNvbGUiLCJlcnJvck1lc3NhZ2UiLCJyb3V0ZXIiLCJyb3V0ZXMiLCJsaXN0ZW4iLCJwb3J0IiwiaHR0cFByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9uIiwicHJvY2VzcyIsImV4aXQiLCJmb3JFYWNoIiwic2lnbmFsIiwibG9nIiwiYWxsIiwidGhlbiIsImVudiIsIk5PREVfRU5WIiwiaHR0cFBvcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxNQUFNQSxHQUFHLEdBQUcsSUFBSUMsZ0JBQUosRUFBWjs7QUFDQSxNQUFNQyxVQUFVLEdBQUdDLGNBQUtDLFlBQUwsQ0FBa0JKLEdBQWxCLENBQW5COztBQUVBLE1BQU1LLFdBQVcsR0FBR0MsZ0JBQU9DLEdBQVAsQ0FBVyxhQUFYLENBQXBCOztBQUVlLE1BQU1DLGFBQU4sQ0FBb0I7QUFDakNDLEVBQUFBLFdBQVcsR0FBRztBQUNaVCxJQUFBQSxHQUFHLENBQUNVLEdBQUosQ0FBUSxTQUFSLEVBQW9CLEdBQUVDLE1BQU8sUUFBN0I7QUFDQVgsSUFBQUEsR0FBRyxDQUFDWSxHQUFKLENBQVFDLFVBQVUsQ0FBQ0MsSUFBWCxFQUFSO0FBQ0FkLElBQUFBLEdBQUcsQ0FBQ1ksR0FBSixDQUNFQyxVQUFVLENBQUNFLFVBQVgsQ0FBc0I7QUFDcEJDLE1BQUFBLFFBQVEsRUFBRTtBQURVLEtBQXRCLENBREY7QUFLQWhCLElBQUFBLEdBQUcsQ0FBQ1ksR0FBSixDQUFRLG9CQUFSO0FBQ0FaLElBQUFBLEdBQUcsQ0FBQ2lCLE9BQUosQ0FBWSxjQUFaO0FBRUFqQixJQUFBQSxHQUFHLENBQUNZLEdBQUosQ0FBUSxDQUFDTSxLQUFELEVBQVFDLEdBQVIsRUFBYUMsR0FBYixFQUFrQkMsSUFBbEIsS0FBMkI7QUFDakMsVUFDRUgsS0FBSyxZQUFZSSxXQUFqQixJQUNBSixLQUFLLENBQUNLLE1BQU4sS0FBaUIsR0FEakIsSUFFQSxVQUFVTCxLQUhaLEVBSUU7QUFDQU0sUUFBQUEsT0FBTyxDQUFDTixLQUFSLENBQWNBLEtBQWQ7QUFDQSxlQUFPRSxHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCVCxJQUFoQixDQUFxQjtBQUMxQlcsVUFBQUEsWUFBWSxFQUFFO0FBRFksU0FBckIsQ0FBUCxDQUZBLENBSUk7QUFDTDs7QUFDREosTUFBQUEsSUFBSTtBQUNMLEtBWkQ7QUFhRDs7QUFFREssRUFBQUEsTUFBTSxDQUFDQyxNQUFELEVBQVM7QUFDYkEsSUFBQUEsTUFBTSxDQUFDM0IsR0FBRCxDQUFOO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQ0QixFQUFBQSxNQUFNLENBQUNDLElBQUksR0FBR3hCLFdBQVIsRUFBcUI7QUFDekIsVUFBTXlCLFdBQVcsR0FBRyxJQUFJQyxPQUFKLENBQVlDLE9BQU8sSUFBSTtBQUN6QzlCLE1BQUFBLFVBQVUsQ0FDUDBCLE1BREgsQ0FDVUMsSUFEVixFQUNnQixNQUFNO0FBQ2xCRyxRQUFBQSxPQUFPO0FBQ1IsT0FISCxFQUlHQyxFQUpILENBSU0sT0FKTixFQUllZixLQUFLLElBQUk7QUFDcEJNLFFBQUFBLE9BQU8sQ0FBQ04sS0FBUixDQUFlLEdBQUVBLEtBQU0sRUFBdkI7QUFDQWdCLFFBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLENBQWI7QUFDRCxPQVBIO0FBUUQsS0FUbUIsQ0FBcEI7QUFXQSxLQUFDLFFBQUQsRUFBVyxTQUFYLEVBQXNCQyxPQUF0QixDQUE4QkMsTUFBTSxJQUNsQ0gsT0FBTyxDQUFDRCxFQUFSLENBQVdJLE1BQVgsRUFBbUIsTUFBTTtBQUN2QmIsTUFBQUEsT0FBTyxDQUFDYyxHQUFSLENBQWEsaUNBQWdDVCxJQUFLLFNBQWxEO0FBQ0FLLE1BQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLENBQWI7QUFDRCxLQUhELENBREY7QUFPQSxXQUFPSixPQUFPLENBQUNRLEdBQVIsQ0FBWSxDQUFDVCxXQUFELENBQVosRUFBMkJVLElBQTNCLENBQWdDLE1BQU07QUFDM0MsWUFBTUMsR0FBRyxHQUFHUCxPQUFPLENBQUNPLEdBQVIsQ0FBWUMsUUFBWixJQUF3QixhQUFwQztBQUNBLFlBQU1DLFFBQVEsR0FBSSxHQUFFZCxJQUFLLFNBQXpCO0FBQ0FMLE1BQUFBLE9BQU8sQ0FBQ2MsR0FBUixDQUFhLHFCQUFvQkcsR0FBSSxhQUFZRSxRQUFTLEVBQTFEO0FBQ0EsYUFBTzNDLEdBQVA7QUFDRCxLQUxNLENBQVA7QUFNRDs7QUF6RGdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tIFwiY29uZmlnXCI7XG5pbXBvcnQgRXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGh0dHAgZnJvbSBcImh0dHBcIjtcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSBcImJvZHktcGFyc2VyXCI7XG5pbXBvcnQgY29ycyBmcm9tIFwiY29yc1wiO1xuXG5jb25zdCBhcHAgPSBuZXcgRXhwcmVzcygpO1xuY29uc3QgaHR0cFNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKGFwcCk7XG5cbmNvbnN0IGRlZmF1bHRQb3J0ID0gY29uZmlnLmdldChcInNlcnZlci5wb3J0XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHByZXNzU2VydmVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgYXBwLnNldChcImFwcFBhdGhcIiwgYCR7Z2xvYmFsfWNsaWVudGApO1xuICAgIGFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuICAgIGFwcC51c2UoXG4gICAgICBib2R5UGFyc2VyLnVybGVuY29kZWQoe1xuICAgICAgICBleHRlbmRlZDogdHJ1ZVxuICAgICAgfSlcbiAgICApO1xuICAgIGFwcC51c2UoY29ycygpKTtcbiAgICBhcHAuZGlzYWJsZShcIngtcG93ZXJlZC1ieVwiKTtcblxuICAgIGFwcC51c2UoKGVycm9yLCByZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlcnJvciBpbnN0YW5jZW9mIFN5bnRheEVycm9yICYmXG4gICAgICAgIGVycm9yLnN0YXR1cyA9PT0gNDAwICYmXG4gICAgICAgIFwiYm9keVwiIGluIGVycm9yXG4gICAgICApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7XG4gICAgICAgICAgZXJyb3JNZXNzYWdlOiBcIkludmFsaWQgSlNPTiBmb3JtYXQgaW4gcmVxdWVzdCBib2R5XCJcbiAgICAgICAgfSk7IC8vIEJhZCByZXF1ZXN0XG4gICAgICB9XG4gICAgICBuZXh0KCk7XG4gICAgfSk7XG4gIH1cblxuICByb3V0ZXIocm91dGVzKSB7XG4gICAgcm91dGVzKGFwcCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW4ocG9ydCA9IGRlZmF1bHRQb3J0KSB7XG4gICAgY29uc3QgaHR0cFByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGh0dHBTZXJ2ZXJcbiAgICAgICAgLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJlcnJvclwiLCBlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnJvcn1gKTtcbiAgICAgICAgICBwcm9jZXNzLmV4aXQoMCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgW1wiU0lHSU5UXCIsIFwiU0lHVEVSTVwiXS5mb3JFYWNoKHNpZ25hbCA9PlxuICAgICAgcHJvY2Vzcy5vbihzaWduYWwsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYFNodXR0aW5nIGRvd24gc2VydmVyIG9uIHBvcnQ6ICR7cG9ydH0gKEhUVFApYCk7XG4gICAgICAgIHByb2Nlc3MuZXhpdCgwKTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHJldHVybiBQcm9taXNlLmFsbChbaHR0cFByb21pc2VdKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IFwiZGV2ZWxvcG1lbnRcIjtcbiAgICAgIGNvbnN0IGh0dHBQb3J0ID0gYCR7cG9ydH0gKEhUVFApYDtcbiAgICAgIGNvbnNvbGUubG9nKGBVcCBhbmQgcnVubmluZyBpbiAke2Vudn0gb24gcG9ydDogJHtodHRwUG9ydH1gKTtcbiAgICAgIHJldHVybiBhcHA7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==