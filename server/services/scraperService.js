import { createTimelineObject } from "../common/helper";
import { db } from "../config";
import uuidv1 from "uuid/v1";

class ScraperService {
  async collectTweets(tweets) {
    const parsedTimeline = JSON.parse(tweets);

    const customTimelineList = [];

    await Promise.all(
      parsedTimeline.map(async timeline => {
        const tweet = createTimelineObject(timeline);
        customTimelineList.push(tweet);
      })
    );

    customTimelineList.sort((a, b) =>
      a.tweetCreatedAt.localeCompare(b.tweetCreatedAt)
    );

    // db.ref("/tweets").push({
    //   id: uuidv1(),
    //   timeline: customTimelineList
    // });

    // filter out duplicated tweets
    // add on to the previous collect tweets list
  }
}

export default new ScraperService();
