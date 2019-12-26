// import config from "config";
import TwitterService from "../../../services/twitterService";

export class Controller {
  async getTimeline(req, res) {
    const response = await TwitterService.getTimeline();

    if (!response) {
      return res.status(400).json("Something went wrong.");
    }

    return res.status(200).json(response);
  }
}

export default new Controller();
