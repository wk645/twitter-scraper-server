import config from "config";
const Twitter = require("twitter-node-client").Twitter;

const twitterConfig = {
  consumerKey: config.get("twitter.consumerKey"),
  consumerSecret: config.get("twitter.consumerSecret"),
  accessToken: config.get("twitter.accessTokenKey"),
  accessTokenSecret: config.get("twitter.accessTokenSecret"),
  callBackUrl: "http://localhost:8000/"
};

const twitter = new Twitter(twitterConfig);

export class TwitterService {
  async getTimeline() {
    return new Promise(resolve => {
      const error = err => {
        resolve(err);
      };
      twitter.getHomeTimeline({ count: "2" }, error, data => {
        if (data) resolve(data);
      });
    });
  }
}

export default new TwitterService();
