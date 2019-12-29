import ScraperService from "../../services/scraperService";
// import moment from "moment";

export class Controller {
  async searchTweets(req, res) {
    // (from:mmmooyoho) until:2019-12-25 since:2019-10-01
    const { username } = req.params;
    const { startDate, endDate } = req.query;
    startDate.split("-");
    endDate.split("-");
    console.log("userId", username);
    console.log("dates", startDate, endDate);

    const requestString = `(from:${username} until:${endDate} since:${startDate})`;
    console.log("requestString", requestString);
    const myUsername = "mmmooyoho";

    const formattedStartDate = startDate.split("-");
    const formattedEndDate = endDate.split("-");

    const requestObject = {
      myUsername,
      username,
      fromMonth: formattedStartDate[1],
      fromDay: formattedStartDate[2],
      fromYear: formattedStartDate[0],
      toMonth: formattedEndDate[1],
      toDay: formattedEndDate[2],
      toYear: formattedEndDate[0]
    };

    await ScraperService.searchTweets(requestObject);

    return res.status(200).json("SUCCESS");
  }
}

export default new Controller();
