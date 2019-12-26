import twitterRouter from "./api/controllers/twitter/router";

export default function routes(app) {
  const baseUrl = "/api/twitter-scraper/v1";

  app.use(`${baseUrl}/twitter`, twitterRouter);
}
