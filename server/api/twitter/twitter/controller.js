import TwitterService from "../../../services/twitterService";
import { createTimelineObject } from "../../../common/helper";

export class Controller {
  static async findFirstTweet(timeline) {
    if (timeline[0].inReplyToScreenName) return timeline[0].id_str;
  }

  static async findLastTweet(timeline) {
    const lastTweet = timeline.slice().pop();
    console.log("last tweet", lastTweet);
  }

  async getTimeline(req, res) {
    const timeline = await TwitterService.getTimeline();

    if (!timeline) {
      return res.status(400).json("Something went wrong.");
    }

    const customTimelineList = [];

    await Promise.all(
      timeline.map(async timeline => {
        const tweet = createTimelineObject(timeline);
        customTimelineList.push(tweet);
      })
    );

    return res.status(200).send(customTimelineList);
  }

  async getFriendsList(req, res) {
    const friends = await TwitterService.getFriendsList();

    if (!friends) {
      return res.status(400).json("Something went wrong.");
    }

    let customFriend = {};
    const customFriendsList = [];

    for (const friend of friends.users) {
      const { id, name, screen_name, description } = friend;

      customFriend = Object.assign(customFriend, {
        id,
        name,
        screenName: screen_name,
        description
      });
      customFriendsList.push(customFriend);
      customFriend = {};
    }

    return res.status(200).json(customFriendsList);
  }

  async getUserTimeline(req, res) {
    const { screenName } = req.params;
    const userTimeline = await TwitterService.getUserTimeline(screenName);
    console.log("userTimeline length", userTimeline.length);

    if (!userTimeline) {
      return res
        .status(400)
        .json(`Error retrieving timeline for user ${screenName}`);
    }

    const customUserTimeline = [];
    let customUserTweet = {};

    for (const tweet of userTimeline) {
      const {
        created_at,
        id,
        id_str,
        text,
        truncated,
        entities: { urls },
        in_reply_to_screen_name
      } = tweet;

      customUserTweet = Object.assign(customUserTweet, {
        createdAt: created_at,
        id,
        id_str,
        text,
        truncated,
        urls: urls || "",
        inReplyToScreenName: in_reply_to_screen_name
      });
      customUserTimeline.push(customUserTweet);
      customUserTweet = {};
    }

    const timeline = customUserTimeline.filter(
      tweet => tweet.inReplyToScreenName === screenName
    );
    timeline.sort((a, b) => a.createdAt.localeCompare(b.createdAt));

    const id = await Controller.findFirstTweet(timeline);
    try {
      await TwitterService.favoriteTweet(id);
    } catch (error) {
      return res.status(500).json("Unexpected server error");
    }

    return res.status(200).json(userTimeline);
  }
}

export default new Controller();
