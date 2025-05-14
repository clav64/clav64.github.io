<template>
  <div class="news-container">
    <h1>🔥 Trending on Hacker News</h1>
    <div class="news-cards">
      <div v-for="story in stories" :key="story.id" class="news-card">
        <div class="image-wrapper">
          <img :src="story.thumbnail || 'default-thumbnail.jpg'" alt="Thumbnail" class="news-image" />
        </div>
        <div class="news-content">
          <h2><a :href="story.url" target="_blank">{{ story.title }}</a></h2>
          <p class="story-meta">By <strong>{{ story.by }}</strong> | Score: <strong>{{ story.score }}</strong></p>
        </div>
      </div>
    </div>
    <p v-if="stories.length === 0">Loading stories...</p>
    <footer>
      <p>
        Data sourced from <a href="https://news.ycombinator.com/" target="_blank">Hacker News</a>.
      </p>
    </footer>
  </div>
</template>


<script>
async function fetchThumbnail(url) {
  try {
    const apiKey = process.env.VUE_APP_LINKPREVIEW_API_KEY;
    const response = await fetch(`https://api.linkpreview.net/?key=${apiKey}&q=${encodeURIComponent(url)}`);
    const data = await response.json();
    return data.image || "default-thumbnail.jpg";
  } catch (error) {
    console.error("Thumbnail fetch error:", error);
    return "default-thumbnail.jpg";
  }
}


export default {
  data() {
    return { stories: [] };
  },
  async mounted() {
    const topStoryIds = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(res => res.json());

    const top10Ids = topStoryIds.slice(0, 12);

    const storyPromises = top10Ids.map(async (id) => {
      const story = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.json());
      story.thumbnail = story.url ? await fetchThumbnail(story.url) : "default-thumbnail.jpg";
      return story;
    });

    this.stories = await Promise.all(storyPromises);
  }
};

</script>

<style>
.news-container {
  max-width: 900px;
  margin: auto;
  text-align: center;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

.news-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.news-card {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 12px;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.15);
}

.image-wrapper {
  overflow: hidden;
}

.news-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
  transition: opacity 0.3s ease-in-out;
}

.news-content {
  padding: 15px;
}

.news-content h2 {
  font-size: 1.2rem;
  margin: 10px 0;
}

.news-content a {
  text-decoration: none;
  color: #0077cc;
}

.news-content a:hover {
  text-decoration: underline;
}

.story-meta {
  font-size: 0.9rem;
  color: #666;
}

footer {
  margin-top: 40px;
  padding: 10px;
  text-align: center;
  background: #f8f9fa;
  border-top: 1px solid #ddd;
  font-size: 0.9rem;
}

footer a {
  color: #0077cc;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}
</style>