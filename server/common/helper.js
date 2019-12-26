const createTimelineObject = tweet => ({
  tweetCreatedAt: tweet.created_at,
  tweetId: tweet.id,
  text: tweet.text,
  truncated: tweet.truncated,
  userMentions: tweet.entities.user_mentions || "",
  urls: tweet.entities.urls || "",
  replyToStatusId: tweet.in_reply_to_status_id || "",
  replyToUserId: tweet.in_reply_to_user_id || "",
  replyToScreenName: tweet.in_reply_to_screen_name || "",
  name: tweet.user.name,
  screenName: tweet.user.screen_name
});

module.exports = {
  createTimelineObject
};
