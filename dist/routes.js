"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routes;

var _router = _interopRequireDefault(require("./api/controllers/twitter/router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function routes(app) {
  const baseUrl = "/api/twitter-scraper/v1";
  app.use(`${baseUrl}/twitter`, _router.default);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci9yb3V0ZXMuanMiXSwibmFtZXMiOlsicm91dGVzIiwiYXBwIiwiYmFzZVVybCIsInVzZSIsInR3aXR0ZXJSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVlLFNBQVNBLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQXFCO0FBQ2xDLFFBQU1DLE9BQU8sR0FBRyx5QkFBaEI7QUFFQUQsRUFBQUEsR0FBRyxDQUFDRSxHQUFKLENBQVMsR0FBRUQsT0FBUSxVQUFuQixFQUE4QkUsZUFBOUI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0d2l0dGVyUm91dGVyIGZyb20gXCIuL2FwaS9jb250cm9sbGVycy90d2l0dGVyL3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByb3V0ZXMoYXBwKSB7XG4gIGNvbnN0IGJhc2VVcmwgPSBcIi9hcGkvdHdpdHRlci1zY3JhcGVyL3YxXCI7XG5cbiAgYXBwLnVzZShgJHtiYXNlVXJsfS90d2l0dGVyYCwgdHdpdHRlclJvdXRlcik7XG59XG4iXX0=