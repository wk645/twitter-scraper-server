import twitterRouter from "./api/twitter/twitter/router";
import scraperRouter from "./api/scraper/router";

export default function routes(app) {
  const baseUrl = "/api/twitter-scraper/v1";

  app.use(`${baseUrl}/twitter`, twitterRouter);
  app.use(`${baseUrl}/scrape`, scraperRouter);
}
