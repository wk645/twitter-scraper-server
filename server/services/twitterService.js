import config from "config";
import cron from "cron";
const Twitter = require("twitter-node-client").Twitter;
import ScraperService from "./scraperService";

const { CronJob } = cron;

const twitterConfig = {
  consumerKey: config.get("twitter.consumerKey"),
  consumerSecret: config.get("twitter.consumerSecret"),
  accessToken: config.get("twitter.accessTokenKey"),
  accessTokenSecret: config.get("twitter.accessTokenSecret"),
  callBackUrl: "http://localhost:8000/"
};

const twitter = new Twitter(twitterConfig);

class TwitterService {
  async run() {
    console.log("Inside RUN");
    this.job = new CronJob(
      "* * * * *",
      async () => {
        await this.getTimeline(true);
      },
      null,
      true
    );
  }

  async getTimeline(isCronJob) {
    console.log("Inside getTimeline()");
    return new Promise(resolve => {
      const error = err => {
        resolve(err);
      };
      twitter.getHomeTimeline({ count: "10" }, error, data => {
        // console.log("DATA", data);
        if (data && isCronJob) ScraperService.collectTweets(data);
        if (data) resolve(data);
      });
    });
  }

  async getFriendsList() {
    return new Promise(resolve => {
      const error = err => {
        resolve(err);
      };
      const parameters = { screen_name: "mmmooyoho" };
      twitter.getCustomApiCall(
        "/friends/list.json",
        parameters,
        error,
        data => {
          if (data) resolve(data);
        }
      );
    });
  }
}

export default new TwitterService();
