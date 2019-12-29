// import { createTimelineObject } from "../common/helper";
// import { db } from "../config";
// import moment from "moment";
import puppeteer from "puppeteer";

class ScraperService {
  async searchTweets(requestObject) {
    const {
      myUsername,
      username,
      fromMonth,
      fromDay,
      fromYear,
      toMonth,
      toDay,
      toYear
    } = requestObject;
    console.log("requestObj", requestObject);
    // const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({
      headless: false,
      devtools: true
    });
    const page = await browser.newPage();
    await page.goto("https://twitter.com/search-advanced");
    await page.click("a[href='/login']");
    await page.type(".email-input", `${myUsername}`);
    await page.type("input[type='password']", "24352435007aA###");
    await page.click("input[type='submit']");
    await page.waitForSelector("input[name='fromTheseAccounts']");
    await page.type("input[name='fromTheseAccounts']", `${username}`);
    await page.waitForSelector("input[name='anyOfTheseWords']");
    await page.type("input[name='anyOfTheseWords']", "별이");
    await page.waitForSelector("select[aria-label='Language']");
    await page.click("select[aria-label='Language']");
    await page.select("select[aria-label='Language']", "ko");
    await page.waitForSelector("select[aria-label='Month']");
    await page.click("select[aria-label='Month']");
    await page.select("select[aria-label='Month']", `${fromMonth.toString()}`);
    await page.waitForSelector("select[aria-label='Day']");
    await page.click("select[aria-label='Day']");
    await page.select("select[aria-label='Day']", `${fromDay.toString()}`);
    await page.waitForSelector("select[aria-label='Year']");
    await page.click("select[aria-label='Year']");
    await page.select("select[aria-label='Year']", `${fromYear.toString()}`);
    await page.waitForSelector(
      ".css-18t94o4.css-1dbjc4n.r-urgr8i.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-1w2pmg.r-1vsu8ta.r-aj3cln.r-1fneopy.r-o7ynqc.r-6416eg.r-lrvibr"
    );
    await page.click(
      ".css-18t94o4.css-1dbjc4n.r-urgr8i.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-1w2pmg.r-1vsu8ta.r-aj3cln.r-1fneopy.r-o7ynqc.r-6416eg.r-lrvibr" /* eslint-disable-line */
    );
    // await browser.close;
  }

  async storeTweets(tweets) {
    // const customTimelineList = [];

    // await Promise.all(
    //   tweets.map(async timeline => {
    //     const tweet = createTimelineObject(timeline);
    //     customTimelineList.push(tweet);
    //   })
    // );

    // customTimelineList.sort((a, b) =>
    //   a.tweetCreatedAt.localeCompare(b.tweetCreatedAt)
    // );

    // db.ref("/tweets").push({
    //   id: moment().format('YYYY-MM-DD[T]HH:mm:ssZ'),
    //   timeline: customTimelineList
    // });

    // filter out duplicated tweets
    // add on to the previous collect tweets list
  }
}

export default new ScraperService();
