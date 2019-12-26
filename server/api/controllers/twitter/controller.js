import TwitterService from "../../../services/twitterService";

export class Controller {
  async getTimeline(req, res) {
    const response = await TwitterService.getTimeline();

    if (!response) {
      return res.status(400).json("Something went wrong.");
    }

    return res.status(200).json(response);
  }

  async getFriendsList(req, res) {
    const friends = await TwitterService.getFriendsList();

    if (!friends) {
      return res.status(400).json("Something went wrong.");
    }

    let customFriend = {};
    const customFriendsList = [];

    const parsedList = JSON.parse(friends);
    for (const friend of parsedList.users) {
      const { id, name, screen_name } = friend;

      customFriend = Object.assign(customFriend, {
        id,
        name,
        screenName: screen_name
      });
      customFriendsList.push(customFriend);
      customFriend = {};
    }

    return res.status(200).json(customFriendsList);
  }
}

export default new Controller();
