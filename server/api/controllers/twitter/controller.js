import TwitterService from "../../../services/twitterService";
import { createTimelineObject } from "../../../common/helper";

export class Controller {
  async getTimeline(req, res) {
    const timeline = await TwitterService.getTimeline();

    if (!timeline) {
      return res.status(400).json("Something went wrong.");
    }

    const customTimelineList = [];

    const parsedTimeline = JSON.parse(timeline);
    await Promise.all(
      parsedTimeline.map(async timeline => {
        const tweet = createTimelineObject(timeline);
        customTimelineList.push(tweet);
      })
    );

    return res.status(200).send(customTimelineList);
  }

  // async getSpecificFriendsList() {

  // }

  async getFriendsList(req, res) {
    const friends = await TwitterService.getFriendsList();

    if (!friends) {
      return res.status(400).json("Something went wrong.");
    }

    let customFriend = {};
    const customFriendsList = [];

    const parsedList = JSON.parse(friends);
    // console.log("parsedList", parsedList);
    for (const friend of parsedList.users) {
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
}

export default new Controller();
