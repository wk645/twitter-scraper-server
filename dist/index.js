"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("config"));

var _server = _interopRequireDefault(require("./server"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = new _server.default().router(_routes.default).listen(_config.default.get("server.port"));

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJTZXJ2ZXIiLCJyb3V0ZXIiLCJyb3V0ZXMiLCJsaXN0ZW4iLCJjb25maWciLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztlQUVlLElBQUlBLGVBQUosR0FBYUMsTUFBYixDQUFvQkMsZUFBcEIsRUFBNEJDLE1BQTVCLENBQW1DQyxnQkFBT0MsR0FBUCxDQUFXLGFBQVgsQ0FBbkMsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSBcImNvbmZpZ1wiO1xuaW1wb3J0IFNlcnZlciBmcm9tIFwiLi9zZXJ2ZXJcIjtcbmltcG9ydCByb3V0ZXMgZnJvbSBcIi4vcm91dGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTZXJ2ZXIoKS5yb3V0ZXIocm91dGVzKS5saXN0ZW4oY29uZmlnLmdldChcInNlcnZlci5wb3J0XCIpKTtcbiJdfQ==