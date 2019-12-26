"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TwitterService = void 0;

var _config = _interopRequireDefault(require("config"));

var _nodeTwitterApi = _interopRequireDefault(require("node-twitter-api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const Twitter = require("twitter-node-client").Twitter;
// var twitterAPI = require('node-twitter-api');
const twitter = new _nodeTwitterApi.default({
  consumerKey: _config.default.get("twitter.consumerKey"),
  consumerSecret: _config.default.get("twitter.consumerSecret"),
  // accessToken: config.get("twitter.accessTokenKey"),
  // accessTokenSecret: config.get("twitter.accessTokenSecret"),
  callBackUrl: "http://localhost:8000/"
}); // const twitter = new Twitter(twitterConfig);

class TwitterService {
  getRequestToken() {
    twitter.getRequestToken(function (error, requestToken, requestTokenSecret, results) {
      if (error) {
        console.log("Error getting OAuth request token : " + error);
      } else {
        //store token and tokenSecret somewhere, you'll need them later; redirect user
        console.log("requestToken", requestToken);
        console.log("requestTokenSecret", requestTokenSecret);
        console.log("results", results);
      }
    });
  }

  getTimeline() {
    const requestToken = this.getRequestToken(); // const error = err => {
    //   console.log("ERROR [%s]", err);
    // };
    // const success = data => {
    //   console.log("Data exists", data);
    //   return data;
    // };
    // let timeline;
    // twitter.getHomeTimeline({ count: "2" }, error, success);
    // console.log("timeline", timeline);
    // return timeline;
  }

}

exports.TwitterService = TwitterService;

var _default = new TwitterService();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9zZXJ2aWNlcy90d2l0dGVyU2VydmljZS5qcyJdLCJuYW1lcyI6WyJ0d2l0dGVyIiwidHdpdHRlckFQSSIsImNvbnN1bWVyS2V5IiwiY29uZmlnIiwiZ2V0IiwiY29uc3VtZXJTZWNyZXQiLCJjYWxsQmFja1VybCIsIlR3aXR0ZXJTZXJ2aWNlIiwiZ2V0UmVxdWVzdFRva2VuIiwiZXJyb3IiLCJyZXF1ZXN0VG9rZW4iLCJyZXF1ZXN0VG9rZW5TZWNyZXQiLCJyZXN1bHRzIiwiY29uc29sZSIsImxvZyIsImdldFRpbWVsaW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBR0E7Ozs7QUFGQTtBQUNBO0FBR0EsTUFBTUEsT0FBTyxHQUFHLElBQUlDLHVCQUFKLENBQWU7QUFDN0JDLEVBQUFBLFdBQVcsRUFBRUMsZ0JBQU9DLEdBQVAsQ0FBVyxxQkFBWCxDQURnQjtBQUU3QkMsRUFBQUEsY0FBYyxFQUFFRixnQkFBT0MsR0FBUCxDQUFXLHdCQUFYLENBRmE7QUFHN0I7QUFDQTtBQUNBRSxFQUFBQSxXQUFXLEVBQUU7QUFMZ0IsQ0FBZixDQUFoQixDLENBUUE7O0FBRU8sTUFBTUMsY0FBTixDQUFxQjtBQUMxQkMsRUFBQUEsZUFBZSxHQUFHO0FBQ2hCUixJQUFBQSxPQUFPLENBQUNRLGVBQVIsQ0FBd0IsVUFDdEJDLEtBRHNCLEVBRXRCQyxZQUZzQixFQUd0QkMsa0JBSHNCLEVBSXRCQyxPQUpzQixFQUt0QjtBQUNBLFVBQUlILEtBQUosRUFBVztBQUNUSSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx5Q0FBeUNMLEtBQXJEO0FBQ0QsT0FGRCxNQUVPO0FBQ0w7QUFDQUksUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QkosWUFBNUI7QUFDQUcsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0NILGtCQUFsQztBQUNBRSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCRixPQUF2QjtBQUNEO0FBQ0YsS0FkRDtBQWVEOztBQUNERyxFQUFBQSxXQUFXLEdBQUc7QUFDWixVQUFNTCxZQUFZLEdBQUcsS0FBS0YsZUFBTCxFQUFyQixDQURZLENBR1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNEOztBQWpDeUI7Ozs7ZUFvQ2IsSUFBSUQsY0FBSixFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tIFwiY29uZmlnXCI7XG4vLyBjb25zdCBUd2l0dGVyID0gcmVxdWlyZShcInR3aXR0ZXItbm9kZS1jbGllbnRcIikuVHdpdHRlcjtcbi8vIHZhciB0d2l0dGVyQVBJID0gcmVxdWlyZSgnbm9kZS10d2l0dGVyLWFwaScpO1xuaW1wb3J0IHR3aXR0ZXJBUEkgZnJvbSBcIm5vZGUtdHdpdHRlci1hcGlcIjtcblxuY29uc3QgdHdpdHRlciA9IG5ldyB0d2l0dGVyQVBJKHtcbiAgY29uc3VtZXJLZXk6IGNvbmZpZy5nZXQoXCJ0d2l0dGVyLmNvbnN1bWVyS2V5XCIpLFxuICBjb25zdW1lclNlY3JldDogY29uZmlnLmdldChcInR3aXR0ZXIuY29uc3VtZXJTZWNyZXRcIiksXG4gIC8vIGFjY2Vzc1Rva2VuOiBjb25maWcuZ2V0KFwidHdpdHRlci5hY2Nlc3NUb2tlbktleVwiKSxcbiAgLy8gYWNjZXNzVG9rZW5TZWNyZXQ6IGNvbmZpZy5nZXQoXCJ0d2l0dGVyLmFjY2Vzc1Rva2VuU2VjcmV0XCIpLFxuICBjYWxsQmFja1VybDogXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvXCJcbn0pO1xuXG4vLyBjb25zdCB0d2l0dGVyID0gbmV3IFR3aXR0ZXIodHdpdHRlckNvbmZpZyk7XG5cbmV4cG9ydCBjbGFzcyBUd2l0dGVyU2VydmljZSB7XG4gIGdldFJlcXVlc3RUb2tlbigpIHtcbiAgICB0d2l0dGVyLmdldFJlcXVlc3RUb2tlbihmdW5jdGlvbihcbiAgICAgIGVycm9yLFxuICAgICAgcmVxdWVzdFRva2VuLFxuICAgICAgcmVxdWVzdFRva2VuU2VjcmV0LFxuICAgICAgcmVzdWx0c1xuICAgICkge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZ2V0dGluZyBPQXV0aCByZXF1ZXN0IHRva2VuIDogXCIgKyBlcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL3N0b3JlIHRva2VuIGFuZCB0b2tlblNlY3JldCBzb21ld2hlcmUsIHlvdSdsbCBuZWVkIHRoZW0gbGF0ZXI7IHJlZGlyZWN0IHVzZXJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXF1ZXN0VG9rZW5cIiwgcmVxdWVzdFRva2VuKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXF1ZXN0VG9rZW5TZWNyZXRcIiwgcmVxdWVzdFRva2VuU2VjcmV0KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHRzXCIsIHJlc3VsdHMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGdldFRpbWVsaW5lKCkge1xuICAgIGNvbnN0IHJlcXVlc3RUb2tlbiA9IHRoaXMuZ2V0UmVxdWVzdFRva2VuKCk7XG5cbiAgICAvLyBjb25zdCBlcnJvciA9IGVyciA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhcIkVSUk9SIFslc11cIiwgZXJyKTtcbiAgICAvLyB9O1xuICAgIC8vIGNvbnN0IHN1Y2Nlc3MgPSBkYXRhID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiRGF0YSBleGlzdHNcIiwgZGF0YSk7XG4gICAgLy8gICByZXR1cm4gZGF0YTtcbiAgICAvLyB9O1xuICAgIC8vIGxldCB0aW1lbGluZTtcbiAgICAvLyB0d2l0dGVyLmdldEhvbWVUaW1lbGluZSh7IGNvdW50OiBcIjJcIiB9LCBlcnJvciwgc3VjY2Vzcyk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcInRpbWVsaW5lXCIsIHRpbWVsaW5lKTtcbiAgICAvLyByZXR1cm4gdGltZWxpbmU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFR3aXR0ZXJTZXJ2aWNlKCk7XG4iXX0=