"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _controller = _interopRequireDefault(require("./controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _express.default.Router().get("/timeline", _controller.default.getTimeline);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvdHdpdHRlci9yb3V0ZXIuanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsIlJvdXRlciIsImdldCIsImNvbnRyb2xsZXIiLCJnZXRUaW1lbGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O2VBRWVBLGlCQUFRQyxNQUFSLEdBQWlCQyxHQUFqQixDQUFxQixXQUFyQixFQUFrQ0Msb0JBQVdDLFdBQTdDLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBleHByZXNzLlJvdXRlcigpLmdldChcIi90aW1lbGluZVwiLCBjb250cm9sbGVyLmdldFRpbWVsaW5lKTtcbiJdfQ==