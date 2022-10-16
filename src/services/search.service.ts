import ytSearch from "yt-search";

class SearchService {
  async searchByName(name: string) {
    const data = await ytSearch(name);
    return data.videos.slice(0, 10);
  }

  async searchById(id: string) {
    const data = await ytSearch({ videoId: id });
    return data;
  }
}

export default SearchService;
