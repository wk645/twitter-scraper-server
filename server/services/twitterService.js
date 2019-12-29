import config from "config";
import cron from "cron";
// const Twitter = require("twitter-node-client").Twitter;
import ScraperService from "./scraperService";

const { CronJob } = cron;

import Twitter from "twitter";

const client = new Twitter({
  consumer_key: config.get("twitter.consumerKey"),
  consumer_secret: config.get("twitter.consumerSecret"),
  access_token_key: config.get("twitter.accessTokenKey"),
  access_token_secret: config.get("twitter.accessTokenSecret")
});

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

  async getTimeline() {
    console.log("Inside getTimeline()");
    return new Promise(resolve => {
      const params = {
        count: "200",
        trim_user: true
      };
      client.get("statuses/home_timeline", params, function(error, tweets) {
        if (!error) {
          resolve(tweets);
        } else {
          resolve(error);
        }
      });
    });
  }

  async getFriendsList() {
    return new Promise(resolve => {
      const params = { screen_name: "mmmooyoho" };
      client.get("friends/list", params, function(error, friends) {
        if (!error) {
          resolve(friends);
        } else {
          resolve(error);
        }
      });
    });
  }

  async getUserTimeline(screenName) {
    return new Promise(resolve => {
      const params = {
        screen_name: screenName,
        trim_user: true,
        count: "200",
        include_rts: false
      };
      client.get("statuses/user_timeline", params, function(error, tweets) {
        if (!error) {
          resolve(tweets);
        } else {
          resolve(error);
        }
      });
    });
  }

  async favoriteTweet(id) {
    return new Promise(resolve => {
      const params = { id };
      client.post("favorites/create", params, function(error, tweet) {
        if (!error) {
          resolve(tweet);
        } else {
          resolve(error);
        }
      });
    });
  }
}

export default new TwitterService();
