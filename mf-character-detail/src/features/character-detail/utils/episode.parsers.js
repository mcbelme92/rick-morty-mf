export const extractEpisodeIds = (urls) =>
  urls.map((url) => url.split("/").pop());
