"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Controller = void 0;

var _twitterService = _interopRequireDefault(require("../../../services/twitterService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import config from "config";
class Controller {
  getTimeline(req, res) {
    console.log("inside get timeline controller");

    const response = _twitterService.default.getTimeline();

    if (!response) {
      return res.status(400).json("Something went wrong.");
    }

    return res.status(200).json(response);
  }

}

exports.Controller = Controller;

var _default = new Controller();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvdHdpdHRlci9jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJnZXRUaW1lbGluZSIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsIlR3aXR0ZXJTZXJ2aWNlIiwic3RhdHVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBREE7QUFHTyxNQUFNQSxVQUFOLENBQWlCO0FBQ3RCQyxFQUFBQSxXQUFXLENBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXO0FBQ3BCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQ0FBWjs7QUFDQSxVQUFNQyxRQUFRLEdBQUdDLHdCQUFlTixXQUFmLEVBQWpCOztBQUVBLFFBQUksQ0FBQ0ssUUFBTCxFQUFlO0FBQ2IsYUFBT0gsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsdUJBQXJCLENBQVA7QUFDRDs7QUFFRCxXQUFPTixHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkgsUUFBckIsQ0FBUDtBQUNEOztBQVZxQjs7OztlQWFULElBQUlOLFVBQUosRSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBjb25maWcgZnJvbSBcImNvbmZpZ1wiO1xuaW1wb3J0IFR3aXR0ZXJTZXJ2aWNlIGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy90d2l0dGVyU2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XG4gIGdldFRpbWVsaW5lKHJlcSwgcmVzKSB7XG4gICAgY29uc29sZS5sb2coXCJpbnNpZGUgZ2V0IHRpbWVsaW5lIGNvbnRyb2xsZXJcIik7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBUd2l0dGVyU2VydmljZS5nZXRUaW1lbGluZSgpO1xuXG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKFwiU29tZXRoaW5nIHdlbnQgd3JvbmcuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENvbnRyb2xsZXIoKTtcbiJdfQ==